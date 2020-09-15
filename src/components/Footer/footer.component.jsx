import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {CoolButton} from '../../globalStyles';
import {FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText, 
    Form, 
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
} from './footer.elements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                    <CoolButton fontBig>Subscribe</CoolButton>
                  
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Contact</FooterLink>
                        <FooterLink to='/sign-up'>Support</FooterLink>
                        <FooterLink to='/sign-up'>Destinations</FooterLink>
                        <FooterLink to='/sign-up'>Sponsorships</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Submit Video</FooterLink>
                        <FooterLink to='/sign-up'>Ambassadors</FooterLink>
                        <FooterLink to='/sign-up'>Agency</FooterLink>
                        <FooterLink to='/sign-up'>Influencer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Instagram</FooterLink>
                        <FooterLink to='/sign-up'>Facebook</FooterLink>
                        <FooterLink to='/sign-up'>Youtube</FooterLink>
                        <FooterLink to='/sign-up'>Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        X-REBEL
                    </SocialLogo>
                    <WebsiteRights>X-REBEL 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='' target="_blank" 
                        aria-label="Facebook">
                        <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='' target="_blank" 
                        aria-label="Instagram">
                        <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='' target="_blank" 
                        aria-label="Youtube">
                        <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='' target="_blank" 
                        aria-label="Twitter">
                        <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='' target="_blank" 
                        aria-label="Linkedin">
                        <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
