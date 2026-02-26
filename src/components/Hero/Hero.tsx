import { Backpack, BookOpenText, GraduationCap } from "lucide-react";
import {
  BudgetButton,
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardTitle,
  FindOutButton,
  HeroButtons,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroImgContainer,
  HeroIntroduction,
  HeroTitle,
  IconWrapper,
} from "./Hero.styled";

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroIntroduction>Join Us</HeroIntroduction>

          <HeroTitle>
            25K+ STUDENTS <br />
            TRUST US
          </HeroTitle>

          <HeroDescription>
            Every day brings with it a fresh set of learning possibilities.
          </HeroDescription>

          <HeroButtons>
            <BudgetButton>Get Quote Now</BudgetButton>
            <FindOutButton>Learn More</FindOutButton>
          </HeroButtons>
        </HeroContent>

        <HeroImgContainer>
          <img src="/img/student.png" alt="student" />
        </HeroImgContainer>
      </HeroContainer>
      <CardContainer>
        <CardContent>
          <Card>
            <IconWrapper>
              <GraduationCap />
            </IconWrapper>
            <CardTitle>Expert instruction</CardTitle>
            <CardDescription>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </CardDescription>
          </Card>
          <Card>
            <IconWrapper>
              <Backpack />
            </IconWrapper>
            <CardTitle>Expert instruction</CardTitle>
            <CardDescription>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </CardDescription>
          </Card>
          <Card>
            <IconWrapper>
              <BookOpenText />
            </IconWrapper>
            <CardTitle>Expert instruction</CardTitle>
            <CardDescription>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </CardDescription>
          </Card>
        </CardContent>
      </CardContainer>
    </>
  );
}

export default Hero;
