import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterItem,
  FooterBottom,
  FooterSocial,
  SocialIcon,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Company Info</FooterTitle>
          <FooterItem>About Us</FooterItem>
          <FooterItem>Carrier</FooterItem>
          <FooterItem>We are hiring</FooterItem>
          <FooterItem>Blog</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Legal</FooterTitle>
          <FooterItem>About Us</FooterItem>
          <FooterItem>Carrier</FooterItem>
          <FooterItem>We are hiring</FooterItem>
          <FooterItem>Blog</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Features</FooterTitle>
          <FooterItem>Business Marketing</FooterItem>
          <FooterItem>User Analytic</FooterItem>
          <FooterItem>Live Chat</FooterItem>
          <FooterItem>Unlimited Support</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Resources</FooterTitle>
          <FooterItem>IOS & Android</FooterItem>
          <FooterItem>Watch a Demo</FooterItem>
          <FooterItem>Customers</FooterItem>
          <FooterItem>API</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Get In Touch</FooterTitle>

          <FooterItem>
            <Phone size={20} />
            <span>(480) 555-0103</span>
          </FooterItem>

          <FooterItem>
            <MapPin size={20} />
            <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
          </FooterItem>

          <FooterItem>
            <Mail size={20} />
            <span>debra.holt@example.com</span>
          </FooterItem>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <span>Made With Love By Figmaland All Right Reserved</span>

        <FooterSocial>
          <SocialIcon>
            <Facebook />
          </SocialIcon>

          <SocialIcon>
            <Instagram />
          </SocialIcon>

          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </FooterSocial>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
