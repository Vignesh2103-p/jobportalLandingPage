import React from 'react';
import { Button } from "@mui/material";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import HeaderComponent from './HeaderComponent';

const FrameComponent = () => {
  return (
    <HeroSectionWrapperRoot>
      <HeroSection>
        <HeaderComponent />
        <SloganDescriptionInput1>
          <SloganDescriptionInput>
            <Slogan>
              <WinYourDream>
                <WinYourDreamText>{`Win your dream job `}</WinYourDreamText>
                <WithPostjob>with PostJob</WithPostjob>
              </WinYourDream>
            </Slogan>
            <Description>
              Submit better job applications — 10x faster. AI cover letter generator,
              resume keyword checker, outreach message writer, and more. Powered
              by GPT.
            </Description>
            <Input>
              <Content1>
                <SupportingText>Your Email</SupportingText>
                <Button3
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#1f392c",
                    fontSize: "16px",
                    background: "#6de754",
                    borderRadius: "12px",
                    "&:hover": { background: "#6de754" },
                  }}
                >
                  Start For Free
                </Button3>
              </Content1>
            </Input>
          </SloganDescriptionInput>
          <InfoCards>
            <InfoCard>
              <FileIcon loading="lazy" alt="" src="/file.svg" />
              <Title>AI Cover Letter Generator</Title>
              <Description1>
                The AI Cover Letter Generator uses AI algorithms to create personalized cover letters for job applicants.
              </Description1>
            </InfoCard>
            <InfoCard>
              <FileIcon loading="lazy" alt="" src="/radio.svg" />
              <Title>Smart Personalization</Title>
              <Description1>
                Smart Personalization delivers tailored experiences and content to individual users using data and technology.
              </Description1>
            </InfoCard>
            <InfoCard>
              <FileIcon loading="lazy" alt="" src="/maximize.svg" />
              <Title1>Resume Scanner</Title1>
              <Description1>
                The Resume Scanner uses OCR technology to extract and analyze data from resumes.
              </Description1>
            </InfoCard>
          </InfoCards>
        </SloganDescriptionInput1>
      </HeroSection>
    </HeroSectionWrapperRoot>
  );
};

const HeroSectionWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-21xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-69xl);
  color: var(--color-gray-100);
  font-family: var(--font-sf-pro-text);
`;

const HeroSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-41xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-61xl);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-top: var(--padding-20xl);
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-21xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
    padding-top: var(--padding-6xl);
  }
`;

const Header = styled.header`
  align-self: stretch;
  background-color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 64px 8px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 99;
  gap: 32px;
  max-width: 100%;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: 'SF Pro Display', sans-serif;

  @media screen and (max-width: 800px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  gap: 8px;

  @media screen and (max-width: 450px) {
    padding: 2px;
  }
`;

const LogoIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const Postjob = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: 0.02em;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 59px;
  white-space: nowrap;
`;

const IconButtons = styled.div`
  width: 292px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;

  @media screen and (max-width: 450px) {
    width: auto;
    flex-direction: column;
    gap: 8px;
  }
`;

const Button1 = styled(Button)`
  height: 44px;
  width: 119px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
`;

const Button2 = styled(Button)`
  height: 44px;
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
`;

const Menu = styled.nav`
  margin: 0 !important;
  width: 458px;
  position: absolute;
  top: calc(50% + 14px);
  left: calc(50% - 501px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  max-width: 100%;
  text-align: left;
  font-size: 16px;
  color: #fff;
  font-family: 'SF Pro Text', sans-serif;

  @media screen and (max-width: 800px) {
    width: auto;
    left: auto;
    top: 100%;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const AiCoverLetter = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 20px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  white-space: nowrap;
`;

const ResumeTemplate = styled.a`
  text-decoration: none;
  width: 144px;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 20px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  color: inherit;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const Pricing = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 20px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 57px;
  white-space: nowrap;
`;

const SloganDescriptionInput1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-37xl);
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: var(--gap-9xl);
  }
`;

const SloganDescriptionInput = styled.div`
  width: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  max-width: 100%;
`;

const Slogan = styled.h1`
  margin: 0;
  align-self: stretch;
  height: 210px;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  align-items: center;
  color: var(--color-limegreen);
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-25xl);
    height: 120px;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-7xl);
    height: 80px;
    margin-top: 30px;
  }
`;

const WinYourDreamText = styled.span`
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  color: var(--color-limegreen);
`;

const WinYourDream = styled.span`
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  color: inherit;
`;

const WithPostjob = styled.span`
  color: var(--color-white);
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
`;

const Description = styled.div`
  width: 474px;
  position: relative;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const Input = styled.div`
  width: 567px;
  border-radius: var(--br-base);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px var(--padding-7xs) var(--padding-sm);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-lg);
`;

const Content1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 0px var(--padding-5xs) 0px var(--padding-5xl);
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SupportingText = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 89px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
`;

const Button3 = styled(Button)`
  height: 44px;
  width: 175px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
`;

const InfoCards = styled.div`
  width: 1147px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-white);
  @media screen and (max-width: 800px) {
    gap: var(--gap-base);
  }
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

const Title = styled.div`
  width: fit-content;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 20px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const Description1 = styled.div`
  align-self: stretch;
  height: 80px;
  position: relative;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 22px;
  color: var(--color-gray-100);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const FileIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const Title1 = styled.div`
  width: 136px;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 20px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export default FrameComponent;
