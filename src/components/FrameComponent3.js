import { Button } from "@mui/material";
import styled from "styled-components";

const FrameComponent3 = () => {
  return (
    <ContentWrapperRoot>
      <Content1>
        <AiContent>
          <TitleDescriptionButton>
            <Title>Free AI cover letter generator powered by GPT</Title>
            <Description>
              A free AI cover letter generator powered by GPT is a tool that
              uses artificial intelligence and natural language processing to
              help job seekers create customized and effective cover letters.
            </Description>
            <Button1
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16px",
                borderColor: "#161815",
                borderRadius: "12px",
                "&:hover": { borderColor: "#161815" },
                width: 197,
                height: 44,
              }}
            >
              Try For free Now
            </Button1>
          </TitleDescriptionButton>
          <IllustrationIcon loading="lazy" alt="" src="/illustration.svg" />
        </AiContent>
        <IllustrationParent>
          <Illustration>
            <IllustrationIcon loading="lazy" alt="" src="/illustration2.png" />
          </Illustration>
          <FrameWrapper>
            <TitleParent>
              <Title>Optimize the keywords in your resume</Title>
              <Description1>
                By optimizing keywords in your resume, you can increase your
                chances of getting noticed by recruiters and landing interviews
                for the jobs you want.
              </Description1>
              <Button2
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16px",
                  borderColor: "#161815",
                  borderRadius: "12px",
                  "&:hover": { borderColor: "#161815" },
                  width: 244,
                  height: 44,
                }}
              >
                Optimize your Resume
              </Button2>
            </TitleParent>
          </FrameWrapper>
        </IllustrationParent>
      </Content1>
    </ContentWrapperRoot>
  );
};

const Title = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  font-size: 48px;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const Description = styled.div`
  align-self: stretch;
  height: 88px;
  font-weight: 400;
  position: relative;
  font-family: "SF Pro Text", sans-serif;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  line-height: 22px;
  display: flex;
  align-items: center;
`;
const Button1 = styled(Button)`
  width: 197px;
  height: 44px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
`;
const TitleDescriptionButton = styled.div`
  width: 456px;
  display: flex;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-5xl);
  min-width: 456px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`;
const IllustrationIcon = styled.img`
  height: auto;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  min-width: 325px;
`;
const AiContent = styled.div`
  width: 1036px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-61xl);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
    gap: var(--gap-21xl);
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-xl);
  }
`;
const BackgroundSimpleIcon = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 22.3px;
  max-height: 100%;
  width: 390.5px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 71.3px;
  left: 11.1px;
  width: 349.6px;
  height: 226.9px;
  z-index: 1;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 416.4px;
  left: 0px;
  width: 434px;
  height: 1px;
  z-index: 1;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  top: 303px;
  left: 328.5px;
  width: 59.3px;
  height: 113.1px;
  z-index: 1;
`;
const GroupIcon2 = styled.img`
  position: absolute;
  top: 71px;
  left: 130px;
  width: 296.2px;
  height: 159.6px;
  object-fit: contain;
  z-index: 2;
`;
const GroupIcon3 = styled.img`
  position: absolute;
  top: 180.2px;
  left: 14.2px;
  width: 265.6px;
  height: 245.7px;
  object-fit: contain;
  z-index: 3;
`;
const BackgroundSimpleParent = styled.div`
  height: 443px;
  flex: 1;
  position: relative;
  max-width: auto;
`;
const Illustration = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xl-1) var(--padding-12xl) var(--padding-8xl-9)
    var(--padding-15xl);
  box-sizing: border-box;
  min-width: 325px;
  max-width: 100%;

  @media screen and (max-width: 800px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Description1 = styled.div`
  align-self: stretch;
  position: relative;
  font-family: "SF Pro Text", sans-serif;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  line-height: 22px;
`;
const Button2 = styled(Button)`
  width: 244px;
  height: 44px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
`;
const TitleParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameWrapper = styled.div`
  width: 456px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-66xl-5) 0px 0px;
  box-sizing: border-box;
  min-width: 456px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-37xl);
    box-sizing: border-box;
  }
`;
const IllustrationParent = styled.div`
  width: 1036px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-61xl);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
    gap: var(--gap-21xl);
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-xl);
  }
`;
const Content1 = styled.div`
  flex: 1;
  background-color: var(--color-limegreen);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-21xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ContentWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-sf-pro-text);
`;

export default FrameComponent3;
