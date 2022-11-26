import styled from 'styled-components';
import { motion } from 'framer-motion';
const Intro = () => {
  return (
    <IntroWrapper>
      <div>
        <div className="subWrapper">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              alt="다람썬더"
              src="http://c.files.bbci.co.uk/DCE1/production/_104454565_mary-mcgowan_caught-in-the-act_00001294.jpg"
            />
          </motion.div>
          <div className="fd-column ta-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              hello world
            </motion.div>
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};
export default Intro;
const IntroWrapper = styled.div`
  .fd-column {
    flex-direction: column;
  }
  .ta-center {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  display: flex;
  flex-direction: column;
  .subWrapper {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`;
