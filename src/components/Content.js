import { Button } from "@mui/material";
import styled from "styled-components";

const Content = () => {
  return (
    <ContentRoot>
      <TitleDescriptionButtonWrapper>
        <TitleDescriptionButton1>
          <TitleDescriptionButton>
            <TitleDescription>
              <Slogan>What’s next</Slogan>
              <Description>
                Submit better job app — 10x faster. AI cover letter generator,
                resume keyword checker, outreach message writer, and more.
                Powered by GPT
              </Description>
            </TitleDescription>
            <Button1
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                borderColor: "#161815",
                borderRadius: "12px",
                "&:hover": { borderColor: "#161815" },
                width: 161,
                height: 44,
              }}
            >
              Try For Free
            </Button1>
          </TitleDescriptionButton>
          <ExpandedMenu>
            <MenuItem>
              <TitleMenu>Platform</TitleMenu>
              <MenuRow>
                <Description>Plans and Prices</Description>
                <Description>AI Create Letters</Description>
                <Description>AI Resume Checker</Description>
                <Description>Resume Templates</Description>
                <Description>Sell Templates</Description>
                <Description>Blog</Description>
              </MenuRow>
            </MenuItem>
            <MenuItem>
              <TitleMenu>Features</TitleMenu>
              <MenuRow>
                <Description>AI Cover Letter Creator</Description>
                <Description>Resume Keywords Optimizer</Description>
                <Description>ATS Resume Checker</Description>
              </MenuRow>
            </MenuItem>
            <MenuItem>
              <TitleMenu>Resources</TitleMenu>
              <MenuRow>
                <Description>4 AI Tools for Applying a Job</Description>
                <Description>How to optimize Resume keywords</Description>
                <Description>
                  Why you should use Chat GPT for create Resume
                </Description>
                <Description>
                  What should you include in a Cover Letter
                </Description>
              </MenuRow>
            </MenuItem>
            {/* <ExpandedMenuItem> */}
              <MenuItem>
                <TitleMenu>Support</TitleMenu>
                <MenuRow1>
                  <Description>support@gmail.com</Description>
                </MenuRow1>
              {/* </MenuItem> */}
              <SocialMedia>
                <InstagramIcon loading="lazy" alt="" src="/instagram.svg" />
                <InstagramIcon loading="lazy" alt="" src="/facebook.svg" />
                <InstagramIcon loading="lazy" alt="" src="/linkedin.svg" />
                <TelegramIcon loading="lazy" alt="" src="/telegram@2x.png" />
              </SocialMedia>
            {/* </ExpandedMenuItem> */}
            </MenuItem>
          </ExpandedMenu>
        </TitleDescriptionButton1>
      </TitleDescriptionButtonWrapper>
      <Divider />
      <Footer>
        <FooterDetails>
          <Description1>© Copywriting</Description1>
          <Description1>|</Description1>
          <Description1>All Rights Reserved</Description1>
          <Description1>|</Description1>
          <Description1>Terms of Use</Description1>
          <Description1>|</Description1>
          <Description1>Privacy</Description1>
        </FooterDetails>
      </Footer>
    </ContentRoot>
  );
};

const Slogan = styled.h1`
  margin: 0;
  width: 372px;
  position: relative;
  font-size: inherit;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-32xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-19xl);
  }
`;
const Description = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 400;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  line-height: 22px;
  color: var(--color-black);
`;
const TitleDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const Button1 = styled(Button)`
  width: 161px;
  height: 44px;
  font-weight: 600;
`;
const TitleDescriptionButton = styled.div`
  width: 456px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const TitleMenu = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  min-width: 83px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 19px;
  }
`;

const MenuRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-base);
`;
const MenuItem = styled.div`
  width: 220px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;

const MenuItem1 = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;

const MenuItem2 = styled.div`
  width: 294px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;

const MenuRow1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-base);
`;
const MenuItem3 = styled.div`
  width: 157px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const InstagramIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
`;
const TelegramIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 24px;
`;
const SocialMedia = styled.div`
  width: 160px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const ExpandedMenuItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  // gap: var(--gap-5xl);
`;
const ExpandedMenu = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const TitleDescriptionButton1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: var(--gap-xl);
  }
`;
const TitleDescriptionButtonWrapper = styled.div`
  width: 1192px;
  display: flex;
  font-family: "SF Pro Text", sans-serif;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-14xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Divider = styled.div`
  width: 1192px;
  height: 1px;
  position: relative;
  background-color: var(--color-gray-300);
  max-width: 100%;
`;
const Div = styled.div`
  width: 18px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 22px;
  text-align: center;
  display: inline-block;
  min-width: 18px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 18px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 18px;
  }
`;
const Description1 = styled.span`
  position: relative;
  line-height: 22px;
  display: inline;
  min-width: auto;
  margin: 0 5px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  color: #333;
`;

const FooterDetails = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const Footer = styled.div`
  width: 1192px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
`;
const ContentRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-limegreen);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-29xl) var(--padding-xl) var(--padding-53xl);
  box-sizing: border-box;
  gap: var(--gap-21xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-45xl);
  color: var(--color-gray-300);
  font-family: var(--font-sf-pro-text);
  @media screen and (max-width: 800px) {
    gap: var(--gap-xl);
    padding-top: var(--padding-12xl);
    padding-bottom: var(--padding-28xl);
    box-sizing: border-box;
  }
`;

export default Content;
