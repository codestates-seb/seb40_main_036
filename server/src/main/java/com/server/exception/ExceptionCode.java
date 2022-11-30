package com.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    Member_NOT_FOUND(404, "Member not found"),
    Question_NOT_FOUND(404, "Question not found"),
    Answer_NOT_FOUND(404, "Answer not found"),
    Shelter_NOT_FOUND(404, "Shelter not found"),
    Reservation_NOT_FOUND(404, "Reservation not found"),
    ReservationInfo_NOT_FOUND(404, "ReservationInfo not found"),
    StuffAnswer_NOT_FOUND(404, "StuffAnswer not found"),
    StuffQuestion_NOT_FOUND(404, "StuffQuestion not found"),
    ShelterQuestion_NOT_FOUND(404, "ShelterQuestion not found"),
    ShelterAnswer_NOT_FOUND(404, "ShelterAnswer not found"),

    MEMBER_EXISTS(409, "Member exists"),
    EMAIL_EXISTS(409,"이미 가입된 이메일이 있습니다."),
    PHONE_EXISTS(409,"이미 가입된 휴대폰 번호가 있습니다."),

    SHELTER_EXISTS(409, "Shelter exists"),
    QUESTION_EXISTS(409, "Question exists"),
    ANSWER_EXISTS(409, "Answer exists"),
    RESERVATION_EXISTS(409, "Reservation exists"),
    RESERVATIONINFO_EXISTS(409, "ReservationInfo exists"),
    STUFFQUESTION_EXISTS(409, "StuffQuestion exists"),
    STUFFANSWER_EXISTS(409, "StuffAnswer exists"),
    SHELTERQUESTION_EXISTS(409, "ShelterQuestion exists"),
    SHELTERANSWER_EXISTS(409, "ShelterAnswer exists"),

    EMAIL_NOT_EXISTS(200, "사용 가능한 이메일 입니다.");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}