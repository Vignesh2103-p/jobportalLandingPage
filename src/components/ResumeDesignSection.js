import { Button } from "@mui/material";
import styled from "styled-components";

const ResumeDesignSection = () => {
  return (
    <ResumeDesignSectionRoot>
      <Content1>
        <TitileDescriptionButton>
          <Title>Free resume design templates</Title>
          <Description>
            By following these design tips, you can create a professional and
            effective resume that will help you stand out to recruiters and
            hiring managers.
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
        </TitileDescriptionButton>
        <IllustrationIcon loading="lazy" alt="" src="/illustration1.svg" />
      </Content1>
    </ResumeDesignSectionRoot>
  );
};

const Title = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
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
  width: 456px;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 22px;
  color: var(--color-gray-100);
  display: flex;
  align-items: center;
  max-width: 100%;
`;
const Button1 = styled(Button)`
  width: 212px;
  height: 44px;
  font-weight: 600;
`;
const TitileDescriptionButton = styled.div`
  width: 479px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-5xl);
  min-width: 479px;
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    flex: 1;
  }
  @media screen and (max-width: 1125px) {
    min-width: 100%;
  }
`;
const IllustrationIcon = styled.img`
  height: 437px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  min-width: 375px;
  @media screen and (max-width: 1125px) {
    min-width: 100%;
  }
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  font-family: "SF Pro Text", sans-serif;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-base);
  }
`;
const ResumeDesignSectionRoot = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-21xl) var(--padding-193xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-white);
  font-family: var(--font-sf-pro-text);
  @media screen and (max-width: 800px) {
    padding: var(--padding-7xl) var(--padding-87xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

export default ResumeDesignSection;
