import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import ResumeDesignSection from "../components/ResumeDesignSection";
import Content from "../components/Content";
import styled from "styled-components";

const PostjobLandingPageRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const PostJobLandingPage1 = () => {
  return (
    <PostjobLandingPageRoot>
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <ResumeDesignSection />
      <Content />
    </PostjobLandingPageRoot>
  );
};

export default PostJobLandingPage1;
