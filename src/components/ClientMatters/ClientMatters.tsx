import { ChevronRight } from "lucide-react";
import {
  ClientMattersBar,
  ClientMattersButton,
  ClientMattersContainer,
  ClientMattersContent,
  ClientMattersDescription,
  ClientMattersImg,
  ClientMattersText,
  ClientMattersTitle,
} from "./ClientMatters.styled";

function ClientMatters() {
  return (
    <ClientMattersContainer>
      <ClientMattersContent>
        <ClientMattersText>
          <ClientMattersBar />

          <ClientMattersTitle>Every Client Matters</ClientMattersTitle>

          <ClientMattersDescription>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </ClientMattersDescription>

          <ClientMattersButton>
            Learn More
            <ChevronRight />
          </ClientMattersButton>
        </ClientMattersText>

        <ClientMattersImg>
          <img src="../../../public/img/client.png" alt="Client" />
        </ClientMattersImg>
      </ClientMattersContent>
    </ClientMattersContainer>
  );
}

export default ClientMatters;
