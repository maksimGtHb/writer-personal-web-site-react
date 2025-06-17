
import {FooterContainer, FooterBox, Column, Heading, FooterLink, FooterLow} from "./FooterStyles";

const Footer = () => {

    return(
        <FooterContainer>
    <FooterBox>
            <Column>
            <Heading>

            </Heading>

            <FooterLink href = "#">
                Blog
            </FooterLink>
            <FooterLink href = "#">
                Content-navigation
            </FooterLink>
            <FooterLink href = "#">
            Privacy Policy
            </FooterLink>
            <FooterLink href = "#">
                Questions
            </FooterLink>
            <FooterLink href = "#">
                Version for the visually impaired
            </FooterLink>
            </Column>

            <Column>
            <Heading>To get</Heading>
            <FooterLink href ="#">
                Consultant & Cooperation
            </FooterLink>
            <FooterLink href = "#">
                Take a order
            </FooterLink>
            <FooterLink href = "#">
                Services
            </FooterLink>
            <FooterLink href = "#">
                Products
            </FooterLink>
            </Column>

            <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
                LinkedIn
            </FooterLink>
            <FooterLink href = "#">
                X
            </FooterLink>
            <FooterLink href = "#">
                Pinterest
            </FooterLink>
            </Column>
        </FooterBox>

        <FooterLow>
            <p>Slovakia, Bratislava</p>
            <p>© 2021 All Rights Reserved</p>

        </FooterLow>

        </FooterContainer>


    );
}

export default Footer;