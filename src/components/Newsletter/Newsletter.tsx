import {
  NewsletterContainer,
  NewsletterIntroduction,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterAction,
  NewsletterInput,
  NewsletterButton,
} from "./Newsletter.styled";

function Newsletter() {
  return (
    <NewsletterContainer>
      <NewsletterIntroduction>Newsletter</NewsletterIntroduction>

      <NewsletterTitle>Watch our Courses</NewsletterTitle>

      <NewsletterDescription>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </NewsletterDescription>

      <NewsletterAction>
        <NewsletterInput type="email" placeholder="Your Email" />
        <NewsletterButton>Subscribe</NewsletterButton>
      </NewsletterAction>
    </NewsletterContainer>
  );
}

export default Newsletter;
