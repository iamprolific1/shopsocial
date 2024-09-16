import { OrdersSideNav } from "../../components/DashboardAsideBar/OrdersNav.tsx";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import { OrderCard } from "../../features/orders/OrderCard";
import MyMap from "../../components/UI/Map/Map"
import image1 from "../../assets/assets_img/image26.jpg";
import image2 from "../../assets/assets_img/image2.jpg";
import image3 from "../../assets/assets_img/image16.jpg";
import image4 from "../../assets/assets_img/image9.jpg";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { IconButton } from '@mui/material'
import styles from "./index.module.css";

const cardItems = [
  {
    image: image1,
    product: "Blue Tyga",
    brand: "Hoodie",
    quantityAvailable: 3,
    price: "29.99",
  },
  {
    image: image2,
    product: "Blue Tyga",
    brand: "T-shirt",
    quantityAvailable: 3,
    price: "19.99",
  },
  {
    image: image3,
    product: "Blue Tyga",
    brand: "Hoodie",
    quantityAvailable: 3,
    price: "24.99",
  },
  {
    image: image4,
    product: "Blue Tyga",
    brand: "Sweater",
    quantityAvailable: 3,
    price: "29.99",
  },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));


export const TrackOrder = ()=> {
    return(
        <div>
            <OrdersSideNav />
            <div className={styles['right_Panel']}>
                <AuthenticatedTopBar />
                <div className=" px-4">
                    <h3 className={styles['header']}>Track Orders</h3>
                    <div className={styles['container']}>
                        <section className={styles['tracking-info']}>
                            <div className={styles['tracking-details']}>
                                <h4 className=' text-[#333333ec] text-sm font-semibold mb-3'>Items for Delivery</h4>
                                <OrderCard
                                    data={cardItems}
                                />
                                
                            </div>
                            <div className={styles['mapContainer']}>
                                <MyMap />
                                <div className={styles['popup']}>
                                  <div className={styles['profile']}>
                                    <div className='flex items-center gap-x-4'>
                                      <div className={styles['profile-image']}>
                                        <StyledBadge
                                          overlap="circular"
                                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                          variant="dot"
                                          >
                                              <img src='https://bit.ly/dan-abramov' className={styles['avatarimg']} />
                                        </StyledBadge>
                                      </div>
                                      <div className={styles['profile-Name']}>Blue Tyga</div>
                                    </div>
                                    <div>
                                      <IconButton>
                                        <FontAwesomeIcon className={styles['comment-icon']} icon={faComment} />
                                      </IconButton>
                                    </div>
                                  </div>

                                  <div className=' w-full mt-2 text-[#333] text-[12px] tracking-wider'>
                                    Hello, I'm on my way, Your delivery code is <span className=' text-green-600'>12345</span>. Please do not share.
                                  </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}