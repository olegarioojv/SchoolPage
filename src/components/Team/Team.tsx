import { Facebook, Instagram, Twitter } from "lucide-react";
import {
  TeamCard,
  TeamContainer,
  TeamContent,
  TeamDescription,
  TeamImgPerfil,
  TeamInfo,
  TeamIntroduction,
  TeamPerfilMidia,
  TeamPerfilName,
  TeamPerfilProfision,
  TeamTitle,
} from "./Team.styled";

function Team() {
  const teamMembers = [
    { img: "/img/user-cover-1.png", name: "Julian Jameson" },
    { img: "/img/user-cover-2.png", name: "Julian Jameson" },
    { img: "/img/user-cover-3.png", name: "Julian Jameson" },
    { img: "/img/user-cover-4.png", name: "Julian Jameson" },
  ];

  return (
    <TeamContainer>
      <TeamIntroduction>Team</TeamIntroduction>
      <TeamTitle>Our Popular Courses</TeamTitle>
      <TeamDescription>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </TeamDescription>

      <TeamContent>
        {teamMembers.map((member, index) => (
          <TeamCard key={index}>
            <TeamImgPerfil>
              <img src={member.img} alt={member.name} />
            </TeamImgPerfil>

            <TeamInfo>
              <TeamPerfilName>{member.name}</TeamPerfilName>
              <TeamPerfilProfision>Profession</TeamPerfilProfision>

              <TeamPerfilMidia>
                <Facebook size={18} />
                <Instagram size={18} />
                <Twitter size={18} />
              </TeamPerfilMidia>
            </TeamInfo>
          </TeamCard>
        ))}
      </TeamContent>
    </TeamContainer>
  );
}

export default Team;
