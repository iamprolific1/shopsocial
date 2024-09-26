import React, { useState } from "react";
import CardChip from "../../assets/card-chip.png";
import ContactlessOutlinedIcon from "@mui/icons-material/ContactlessOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MastercardIcon from "../../assets/mastercard.png";
import VisaIcon from "../../assets/visa.png"
import styled from "styled-components";


const CardContainer = styled.div`
  perspective: 1000px;
`;

const CardWrapper = styled.div<{ isFlipped: boolean }>`
  width: 350px;
  height: 200px;
  background: #117922;
  color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  cursor: pointer;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardFace = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
`;

const FrontCard = styled(CardFace)`
  background-color: #117922;
`;

const BackCard = styled(CardFace)`
  background-color: #333;
  transform: rotateY(180deg);
`;

const MagneticStrip = styled.div`
  height: 40px;
  background: #000;
  margin-top: 20px;
  border-radius: 5px;
`;

const Signature = styled.div`
  margin-top: 20px;
  height: 40px;
  background: #eee;
  border-radius: 5px;
  padding: 10px;
  color: #333;
  font-size: 13px;
`;

const CardNumber = styled.div`
  font-size: 20px;
  letter-spacing: 3px;
  text-shadow: 0px 2px #333;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardHolderName = styled.div`
  text-transform: uppercase;
  font-size: 15px;
  text-shadow: 0px 2px #333;
`;

const ExpiryDate = styled.div`
  font-size: 16px;
  text-shadow: 0px 2px #333;
`;

const Cvv = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-align: right;
  font-weight: 500;
`;

const CardInputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 350px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const CardTypeIcon = styled.img`
  postion: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;

  &:focus {
    outline: none;
    border-color: #16962B;
  }
`;

export const CreditCard: React.FC = () => {
    const [cardNumber, setCardNumber] = useState<string>("#### #### #### ####");
    const [cardHolder, setCardHolder] = useState<string>("John Doe");
    const [expiryDate, setExpiryDate] = useState<string>("MM/YY");
    const [cvv, setCvv] = useState<string>("***");
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [cardType, setCardType] = useState<string | null>(null);

    const detectCardType = (num: string) => {
      const visaRegex = /^4[0-9]{0,15}/;
      const masterCardRegex = /^(?:5[1-5][0-9]{0,14}|2[2-7][0-9]{0-14})/;

      if (visaRegex.test(num)) {
        return "visa";
      } else if (masterCardRegex.test(num)) {
        return "mastercard";
      }
      return null;
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove any non-numeric characters
        if (input.length <= 16) {
          input = input.replace(/(.{4})/g, "$1 ").trim(); // Adds a space after every 4 digits
          setCardNumber(input);
          const detectedCardType = detectCardType(input);
          setCardType(detectedCardType);
        }
    };

    const handleCvvFocus = () => {
        setIsFlipped(true);
    };

    const handleCvvBlur = () => {
        setIsFlipped(false);
    };

    const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove any non-numeric characters
        if (input.length <= 4) {
        // Format the input as MM/YY
        if (input.length >= 3) {
            input = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
        }
        setExpiryDate(input);
        }
    };

    const handleCvvInputChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const input = e.target.value.replace(/\D/g, "");
        if(input.length <= 3) {
            setCvv(input)
        }
    }

    

    return (
        <div className='flex flex-col justify-center items-center'>
            <CardContainer onClick={()=> setIsFlipped(!isFlipped)}>
                <CardWrapper isFlipped={isFlipped}>
                {/* Front of the card */}
                <FrontCard>
                    <CardHeader>
                    <img src={CardChip} alt="Card Chip" />
                    <ContactlessOutlinedIcon />
                    </CardHeader>
                    <CardNumber>{cardNumber}</CardNumber>
                    <CardHolder>
                    <CardHolderName>
                        <div className="text-[10px] tracking-wide text-white mb-1 text-uppercase">
                        Card Holder
                        </div>
                        {cardHolder}
                    </CardHolderName>
                    <ExpiryDate>{expiryDate}</ExpiryDate>
                    </CardHolder>
                </FrontCard>
                {/* Back of the card */}
                <BackCard>
                    <MagneticStrip />
                    <Signature>Signature</Signature>
                    <Cvv>CVV: {cvv}</Cvv>
                </BackCard>
                </CardWrapper>
            </CardContainer>

            <CardInputWrapper>

                <InputWrapper>
                  {cardType === 'visa' && <CardTypeIcon src={VisaIcon} alt='visa-icon image' />}
                  {cardType === 'mastercard' && (
                    <CardTypeIcon src={MastercardIcon} alt='mastercard-icon image' />
                  )}
                  <Input
                  type="text"
                  placeholder="Card Number"
                  maxLength={16} // 16 digits + 3 spaces
                  onChange={handleCardNumberChange}
                  />
                </InputWrapper>
                
                <Input
                type="text"
                placeholder="Card Holder"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                />
                <div className="flex items-center gap-x-2">
                  <Input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  value={expiryDate}
                  maxLength={5} // MM/YY
                  onChange={handleExpiryDateChange}
                  onFocus={()=>setExpiryDate('')}

                  />
                  <Input
                  type="password"
                  placeholder="CVV"
                  maxLength={3}
                  onChange={handleCvvInputChange}
                  onFocus={handleCvvFocus}
                  onBlur={handleCvvBlur}
                  />
                </div>
                <div className='flex items-center justify-between mt-3'>
                  <FormControlLabel 
                    control={
                      <Checkbox size="small" color='success' sx={{ borderRadius: '10px', color: '#16962b' }} />
                    } 
                    label={'Remember this card'} 
                    sx={{
                      '.MuiFormControlLabel-label': {
                        fontSize: '12px',
                        color: 'gray',
                        letterSpacing: '1px',
                        fontWeight: '300'
                      }
                    }}
                  />
                  <Button
                    variant='contained'

                    sx={{
                      background: '#16962b',
                      textTransform: 'capitalize',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        background: '#16962b'
                      }
                    }}
                  >
                    Confirm <ArrowForwardIcon sx={{ fontSize: '15px'}} />
                  </Button>
                </div>
            </CardInputWrapper>
        </div>
    );
};
