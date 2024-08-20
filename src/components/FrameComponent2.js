import { Button } from "@mui/material";
import styled from "styled-components";

const FrameComponent2 = () => {
  return (
    <AboutSection2WrapperRoot>
      <AboutSection>
        <TitleDescriptionButton>
          <Title>Spend less time looking for work</Title>
          <Description>
            We'll help you through the hardest part of your job search.
          </Description>
          <Button1
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16px",
              borderColor: "#6de754",
              borderRadius: "12px",
              "&:hover": { borderColor: "#6de754" },
              width: 212,
              height: 44,
            }}
          >
            Create an Account
          </Button1>
        </TitleDescriptionButton>
        <InfoCards>
          <InfoCard>
            <FileIcon loading="lazy" alt="" src="/file.svg" />
            <Title1>Cover Letter</Title1>
            <Description1>
              A cover letter is a document that accompanies a job application
              and is written to introduce the applicant to the employer.
            </Description1>
          </InfoCard>
          <InfoCard>
            <FileIcon loading="lazy" alt="" src="/mail.svg" />
            <Title1>Resignation Letters</Title1>
            <Description1>
              A resignation letter is a formal document that an employee writes
              to inform their employer of their decision to leave the company.
            </Description1>
          </InfoCard>
          <InfoCard>
            <FileIcon loading="lazy" alt="" src="/gitpullrequest.svg" />
            <Title1>Connection Request</Title1>
            <Description1>
              A connection request is a message sent on a social networking
              site, such as LinkedIn, requesting to connect with another user.
            </Description1>
          </InfoCard>
          <InfoCard>
            <FileIcon loading="lazy" alt="" src="/send.svg" />
            <Title1>Outreach Emails</Title1>
            <Description1>
              Outreach emails are messages sent by individuals or businesses to
              introduce themselves, establish a connection, or propose a
              collaboration.
            </Description1>
          </InfoCard>
          <InfoCard>
            <FileIcon loading="lazy" alt="" src="/grid.svg" />
            <Title1>Resume Optimization</Title1>
            <Description1>
              Smart Personalization refers to the use of data and technology to
              deliver tailored experiences and content to individual customers
              or users.
            </Description1>
          </InfoCard>
          <InfoCard>
            <FileIcon loading="lazy" alt="" src="/codesandbox.svg" />
            <Title1>Resume Design</Title1>{" "}
            <Description1>
              A resume scanner is a software application that uses optical
              character recognition (OCR) technology to extract and analyze data
              from resumes.
            </Description1>
          </InfoCard>
        </InfoCards>
      </AboutSection>
    </AboutSection2WrapperRoot>
  );
};

const Title = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const Description = styled.div`
  width: 358px;
  position: relative;
  font-weight: 400;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  line-height: 20px;
  color: var(--color-gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
const Button1 = styled(Button)`
  width: 212px;
  height: 44px;
  font-weight: 600;
`;
const TitleDescriptionButton = styled.div`
  width: 420px;
  display: flex;
  font-family: "SF Pro Text", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
`;
const FileIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const Description1 = styled.div`
  align-self: stretch;
  height: 80px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 20px;
  color: var(--color-gray-100);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const InfoCard = styled.div`
  width: 361px;
  border-radius: var(--br-xs);
  background-color: var(--color-gray-200);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-xl) var(--padding-5xl)
    var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-base);
  max-width: 100%;
`;
const Title1 = styled.div`
  width: fit-content;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 20px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const InfoCards = styled.div`
  width: 1147px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 32px 30px;
  min-height: 440px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
`;
const AboutSection = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-21xl) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: var(--gap-base);
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const AboutSection2WrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) var(--padding-21xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-29xl);
  color: var(--color-white);
  font-family: var(--font-sf-pro-text);
`;

export default FrameComponent2;
