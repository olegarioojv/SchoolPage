import {
  ChevronRight,
  Download,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import {
  TrainingCardButton,
  TrainingCardContainer,
  TrainingCardContent,
  TrainingCardDescription,
  TrainingCardDiscount,
  TrainingCardIcon,
  TrainingCardImagem,
  TrainingCardIntroduction,
  TrainingCardNotes,
  TrainingCardParagraph,
  TrainingCardPrice,
  TrainingCardSale,
  TrainingCardSales,
  TrainingCardTitle,
  TrainingContainer,
  TrainingContent,
  TrainingDescription,
  TrainingIntroduction,
  TrainingTitle,
  TrainingCardsWrapper,
} from "./Training.styled";

function Training() {
  return (
    <TrainingContainer>
      <TrainingContent>
        <TrainingIntroduction>Practice Advice</TrainingIntroduction>
        <TrainingTitle>Our Experts Teacher</TrainingTitle>
        <TrainingDescription>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </TrainingDescription>
      </TrainingContent>

      <TrainingCardsWrapper>
        <TrainingCardContainer>
          <TrainingCardImagem>
            <img src="../../../public/img/product_01.png" alt="Produto" />
            <TrainingCardSale>Sale</TrainingCardSale>

            <TrainingCardIcon>
              <span>
                <Heart size={16} />
              </span>
              <span>
                <ShoppingCart size={16} />
              </span>
              <span>
                <Eye size={16} />
              </span>
            </TrainingCardIcon>
          </TrainingCardImagem>

          <TrainingCardContent>
            <TrainingCardDescription>
              <TrainingCardIntroduction>
                Training Courses
              </TrainingCardIntroduction>

              <TrainingCardNotes>
                <Star size={12} fill="#f3cd03" color="#f3cd03" />
                4.9
              </TrainingCardNotes>
            </TrainingCardDescription>

            <TrainingCardTitle>Get Quality Education</TrainingCardTitle>

            <TrainingCardParagraph>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </TrainingCardParagraph>

            <TrainingCardSales>
              <Download size={12} /> 15 Sales
            </TrainingCardSales>

            <TrainingCardPrice>$16.48</TrainingCardPrice>
            <TrainingCardDiscount>$6.48</TrainingCardDiscount>

            <TrainingCardButton>
              Learn More <ChevronRight size={14} />
            </TrainingCardButton>
          </TrainingCardContent>
        </TrainingCardContainer>

        <TrainingCardContainer>
          <TrainingCardImagem>
            <img src="../../../public/img/product_02.png" alt="Produto" />

            <TrainingCardSale>Sale</TrainingCardSale>

            <TrainingCardIcon>
              <span>
                <Heart size={16} />
              </span>
              <span>
                <ShoppingCart size={16} />
              </span>
              <span>
                <Eye size={16} />
              </span>
            </TrainingCardIcon>
          </TrainingCardImagem>

          <TrainingCardContent>
            <TrainingCardDescription>
              <TrainingCardIntroduction>
                Training Courses
              </TrainingCardIntroduction>

              <TrainingCardNotes>
                <Star size={12} fill="#f3cd03" color="#f3cd03" />
                4.9
              </TrainingCardNotes>
            </TrainingCardDescription>

            <TrainingCardTitle>Get Quality Education</TrainingCardTitle>

            <TrainingCardParagraph>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </TrainingCardParagraph>

            <TrainingCardSales>
              <Download size={12} /> 15 Sales
            </TrainingCardSales>

            <TrainingCardPrice>$16.48</TrainingCardPrice>
            <TrainingCardDiscount>$6.48</TrainingCardDiscount>

            <TrainingCardButton>
              Learn More <ChevronRight size={14} />
            </TrainingCardButton>
          </TrainingCardContent>
        </TrainingCardContainer>

        <TrainingCardContainer>
          <TrainingCardImagem>
            <img src="../../../public/img/product_03.png" alt="Produto" />

            <TrainingCardSale>Sale</TrainingCardSale>

            <TrainingCardIcon>
              <span>
                <Heart size={16} />
              </span>
              <span>
                <ShoppingCart size={16} />
              </span>
              <span>
                <Eye size={16} />
              </span>
            </TrainingCardIcon>
          </TrainingCardImagem>

          <TrainingCardContent>
            <TrainingCardDescription>
              <TrainingCardIntroduction>
                Training Courses
              </TrainingCardIntroduction>

              <TrainingCardNotes>
                <Star size={12} fill="#f3cd03" color="#f3cd03" />
                4.9
              </TrainingCardNotes>
            </TrainingCardDescription>

            <TrainingCardTitle>Get Quality Education</TrainingCardTitle>

            <TrainingCardParagraph>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </TrainingCardParagraph>

            <TrainingCardSales>
              <Download size={12} /> 15 Sales
            </TrainingCardSales>

            <TrainingCardPrice>$16.48</TrainingCardPrice>
            <TrainingCardDiscount>$6.48</TrainingCardDiscount>

            <TrainingCardButton>
              Learn More <ChevronRight size={14} />
            </TrainingCardButton>
          </TrainingCardContent>
        </TrainingCardContainer>
      </TrainingCardsWrapper>
    </TrainingContainer>
  );
}

export default Training;
