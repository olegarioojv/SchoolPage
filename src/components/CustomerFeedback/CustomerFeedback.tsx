import { Star } from "lucide-react";
import {
  CustomerFeedbackCard,
  CustomerFeedbackComment,
  CustomerFeedbackContainer,
  CustomerFeedbackContent,
  CustomerFeedbackDescription,
  CustomerFeedbackIntroduction,
  CustomerFeedbackList,
  CustomerFeedbackPerfil,
  CustomerFeedbackPerfilImg,
  CustomerFeedbackPerfilName,
  CustomerFeedbackPerfilProfession,
  CustomerFeedbackStar,
  CustomerFeedbackTitle,
} from "./CustomerFeedback.styled";

function CustomerFeedback() {
  return (
    <CustomerFeedbackContainer>
      <CustomerFeedbackContent>
        <CustomerFeedbackIntroduction>
          Practice Advice
        </CustomerFeedbackIntroduction>

        <CustomerFeedbackTitle>Every Client Matters</CustomerFeedbackTitle>

        <CustomerFeedbackDescription>
          Problems trying to resolve the conflict between the two major
          realms...
        </CustomerFeedbackDescription>
      </CustomerFeedbackContent>

      <CustomerFeedbackList>
        <CustomerFeedbackCard>
          <CustomerFeedbackStar>
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} color="#f3cd03" />
          </CustomerFeedbackStar>
          <CustomerFeedbackComment>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </CustomerFeedbackComment>

          <CustomerFeedbackPerfil>
            <CustomerFeedbackPerfilImg
              src="/img/profile.png"
              alt="Perfil"
            />
            <div>
              <CustomerFeedbackPerfilName>
                Regina Miles
              </CustomerFeedbackPerfilName>
              <CustomerFeedbackPerfilProfession>
                Designer
              </CustomerFeedbackPerfilProfession>
            </div>
          </CustomerFeedbackPerfil>
        </CustomerFeedbackCard>
        <CustomerFeedbackCard>
          <CustomerFeedbackStar>
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} color="#f3cd03" />
          </CustomerFeedbackStar>
          <CustomerFeedbackComment>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </CustomerFeedbackComment>

          <CustomerFeedbackPerfil>
            <CustomerFeedbackPerfilImg
              src="/img/profile2.png"
              alt="Perfil"
            />
            <div>
              <CustomerFeedbackPerfilName>
                Regina Miles
              </CustomerFeedbackPerfilName>
              <CustomerFeedbackPerfilProfession>
                Designer
              </CustomerFeedbackPerfilProfession>
            </div>
          </CustomerFeedbackPerfil>
        </CustomerFeedbackCard>
        <CustomerFeedbackCard>
          <CustomerFeedbackStar>
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} fill="#f3cd03" color="#f3cd03" />
            <Star size={20} color="#f3cd03" />
          </CustomerFeedbackStar>
          <CustomerFeedbackComment>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </CustomerFeedbackComment>

          <CustomerFeedbackPerfil>
            <CustomerFeedbackPerfilImg
              src="/img/profile3.png"
              alt="Perfil"
            />
            <div>
              <CustomerFeedbackPerfilName>
                Regina Miles
              </CustomerFeedbackPerfilName>
              <CustomerFeedbackPerfilProfession>
                Designer
              </CustomerFeedbackPerfilProfession>
            </div>
          </CustomerFeedbackPerfil>
        </CustomerFeedbackCard>
      </CustomerFeedbackList>
    </CustomerFeedbackContainer>
  );
}

export default CustomerFeedback;
