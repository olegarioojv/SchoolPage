import {
  BudgetButton,
  FindOutButton,
  HeroButtons,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroImgContainer,
  HeroIntroduction,
  HeroTitle,
} from "./Hero.styled";

function Hero() {
  return (
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
        <img src="../../../public/img/student.png" alt="student" />
      </HeroImgContainer>
    </HeroContainer>
  );
}

export default Hero;
