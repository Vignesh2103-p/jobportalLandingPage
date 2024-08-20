import styled from "styled-components";
import PropTypes from "prop-types";

const FrameComponent1 = () => {
  return (
    <ContentWrapperRoot>
      <Content1>
        <ContentInner>
          <FrameParent>
            <FrameGroup>
              <TitleWrapper>
                <Title>Submit Better job applications</Title>
              </TitleWrapper>
              <Slogan>10x faster</Slogan>
            </FrameGroup>
            <DescriptionWrapper>
              <Description>
                AI cover letter generator, resume keyword checker, outreach
                message writer, and more. Powered by GPT
              </Description>
            </DescriptionWrapper>
          </FrameParent>
        </ContentInner>
        <FrameIcon loading="lazy" alt="" src="/frame.svg" />
      </Content1>
    </ContentWrapperRoot>
  );
};

const Title = styled.h1`
  margin: 0;
  height: 114px;
  width: 420px;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const TitleWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Slogan = styled.div`
  align-self: stretch;
  position: relative;
  font-family: "SF Pro Text", sans-serif;
  font-size: var(--font-size-133xl);
  font-weight: 600;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-42xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-19xl);
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Description = styled.div`
  width: 474px;
  position: relative;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  max-width: 100%;
`;
const DescriptionWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  margin-top: -4px;
  font-size: var(--font-size-base);
`;
const FrameParent = styled.div`
  width: 742px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  max-width: 100%;
`;
const ContentInner = styled.div`
  margin-top: -351px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const FrameIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;
const Content1 = styled.div`
  height: 941px;
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-limegreen);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-162xl) 0px var(--padding-740xl);
  box-sizing: border-box;
  gap: var(--gap-xs);
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    padding-top: 180px;
    padding-bottom: 10px;
    height: 860px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1125px) {
    height: 750px;
  }
  @media screen and (max-width: 800px) {
    padding-top: 220px;
    height: 520px;
  }
  @media screen and (max-width: 564px) {
    height: 380px;
  }
`;
const ContentWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-29xl) var(--padding-21xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-sf-pro-text);
  @media screen and (max-width: 800px) {
    padding-left: var(--padding-5xl);
    padding-right: var(--padding-5xl);
    box-sizing: border-box;
  }
`;

export default FrameComponent1;
