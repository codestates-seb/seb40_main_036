package com.server.question.service;

import com.server.answer.entity.Answer;
import com.server.answer.repository.AnswerRepository;
import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import com.server.question.entity.Question;
import com.server.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final MemberRepository memberRepository;

    private final AnswerRepository answerRepository;

    public Question createQuestion(Question question, List<MultipartFile> images) throws Exception{

        String savedFileName = "";
        // 1. 파일 저장 경로 설정 : 실제 서비스되는 위치(프로젝트 외부에 저장)
        String uploadPath = "\\src\\main\\resources\\static\\files";

        // 여러 개의 원본 파일을 저장할 리스트 생성
        ArrayList<String> originalFileNameList = new ArrayList<String>();

        for(MultipartFile image : images) {
            // 2. 원본 파일 이름 알아오기
            String originalFileName = image.getOriginalFilename();

            // 3. 파일 이름을 리스트에 추가
            originalFileNameList.add(originalFileName);

            // 4. 파일 이름 중복되지 않게 이름 변경(서버에 저장할 이름) UUID 사용
            UUID uuid = UUID.randomUUID();
            savedFileName = uuid.toString() + "_" + originalFileName;

            // 5. 파일 생성
            File file1 = new File(uploadPath + savedFileName);

            // 6. 서버로 전송
            image.transferTo(file1);
        }

        if(!memberRepository.existsById(question.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        question.setQuestionCreated(LocalDate.now());

        Member member = memberRepository.findByMemberId(question.getMemberId());
        question.setName(member.getName());

        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question){

        if(!memberRepository.existsById(question.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        Question findquestion = findVerifiedQuestion(question.getQuestionId());

        // title 수정
        Optional.ofNullable(question.getQuestionTitle())
                .ifPresent(Title->findquestion.setQuestionTitle(Title));
        // content 수정
        Optional.ofNullable(question.getQuestionContent())
                .ifPresent(Content ->findquestion.setQuestionContent(Content));
        // locationTag 수정
        Optional.ofNullable(question.getLocationTag())
                .ifPresent(Tag->findquestion.setLocationTag(Tag));

        findquestion.setQuestionModified(LocalDate.now());

        return questionRepository.save(findquestion);

    }
    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalquestion=
                questionRepository.findById(questionId);
        Question findquestion =
                optionalquestion.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.Question_NOT_FOUND));
        return findquestion;
    }

    public Question findQuestion(long questionId){
        return findVerifiedQuestion(questionId);
    }

    public List<Question> searchTitleQuestion(String word){
        return questionRepository.findByQuestionTitleContainingOrderByQuestionIdDesc(word);
    }

    public List<Question> searchNameQuestion(String word){
        return questionRepository.findByNameContainingOrderByQuestionIdDesc(word);
    }

    public List<Question> searchContentQuestion(String word){
        return questionRepository.findByQuestionContentContainingOrderByQuestionIdDesc(word);
    }

    public List<Question> searchTagQuestion(String word){
        return questionRepository.findByLocationTagContainingOrderByQuestionIdDesc(word);
    }
    public Page<Question> findQuestions(int page, int size){
        return questionRepository.findAll(PageRequest.of(page,size,
                Sort.by("questionId").descending()));
    }

    @Transactional
    public void deleteQuestion(long questionId){

        if(!questionRepository.existsById(questionId)){
            throw new BusinessLogicException(ExceptionCode.Question_NOT_FOUND);
        }

        List<Answer> answers=answerRepository.findByQuestionId(questionId);

        answerRepository.deleteAll(answers);

        questionRepository.deleteById(questionId);
    }

    public Question addViews(Question question){
        long views = question.getViews();
        views++;
        question.setViews(views);

        return questionRepository.save(question);
    }

}
