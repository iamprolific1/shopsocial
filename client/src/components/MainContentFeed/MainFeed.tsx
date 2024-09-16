import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { Button, Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import { VolumeOff, VolumeUp } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeartIcon from "../../assets/icons/HeartIcon";
import ChatBubble from "../../assets/icons/ChatBubble";
import ShareIcon from "../../assets/icons/ShareIcon";
import BookmarkIcon from "../../assets/icons/BookmarkIcon"
import RefreshIcon from '../../assets/icons/RefreshIcon';

import StarComponent from '../../components/starComponent/StarComponent'

import { profileAvatar as ProfileAvatar } from './Feeds'
import { defaultPostType } from './Feeds';
import { videoPostType } from './Feeds';

import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import { useToggleMute } from '../../Hooks/useToggleMute'
import CustomCarousel from '../CustomCarousel/Carousel';
import ReadMore from '../ReadMore/ReadMore';
import { CurrencyFormatter } from '../../utils/CurrencyFormatter';

const MainFeed: React.FC = () => {

    //watching all video entries using the custom hook created- (threshold starting at 0.5 -(half the view port of the video element))
    const { entries, refs } = useIntersectionObserver({
      threshold: 0.5, 
    });

    //(get the total video component and set their default mute to be true)
    const totalVideos = (videoPostType[0].video?.reduce((sum, video) => sum + video.url.length, 0) || 0);
    const { muteStatus, toggleMuteStatus, videoRefs} = useToggleMute(totalVideos);

    //using count to increment each video index in the videoPostType array
    let videoCount = 0;

    useEffect(() => {
      //Loop through each entry
      entries.forEach((entry)=>{
        const index = refs.current.findIndex((ref) => ref === entry.target);

        if(index !== -1) {
          const videoElement = refs.current[index];
          if(videoElement) {
            if(entry.isIntersecting){
              
              videoElement.play().catch(()=>{
                throw new Error('Error Playing video')
              })
            }else{
              videoElement.pause()
            }
          }
        }

      })
    }, [entries, refs]);

    //handle slide change Index for each post (this handle synchronization between each posts(products, videos), their names or details respectively. In other words, each slide index for each name or details index)
    const [activeSlideIndex, setActiveSlideIndex] = useState<number[]>([]);
    const handleSlideChange = (postIndex: number, slideIndex: number) => {
      setActiveSlideIndex((prev)=> {
        const newActiveSlideIndex = [...prev];
        newActiveSlideIndex[postIndex] = slideIndex;
        return newActiveSlideIndex;
      })
    }

    //handle menu option open and close dropdown...

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorEl);

    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };


    return (
      <main className={styles["main-content"]}>
        {/* Product Post Types */}
        {defaultPostType[0].product?.map((product, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 600 }}
            variant="outlined"
            className={styles["card"]}
          >
            <CardHeader
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              avatar={
                product.avatar ? <ProfileAvatar {...product.avatar} /> : null
              }
              action={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    sx={{
                      mr: 2,
                      fontSize: "12px",
                      textTransform: "capitalize",
                      letterSpacing: "1px",

                    }}
                  >
                    Follow
                  </Button>
                  <IconButton aria-label="settings" onClick={handleMenuOpen}>
                    <MoreVertIcon />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiPaper-root": {
                        boxShadow: "none",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "10px",
                        color: "#333",
                        backgroundColor: "#f9f9f9",
                        width: '100px',
                        letterSpacing: '1px',
                      },
                    }}
                  >
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px', padding: '6px' }}>Report</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px', padding: '6px' }}>Block</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px', padding: '6px' }}>Message</MenuItem>
                  </Menu>
                </Box>
              }
              title={
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "1rem", letterSpacing: "1px", color: "#333" }}
                  gutterBottom
                >
                  {product.avatar?.user_Name}
                </Typography>
              }
              subheader={
                <Box>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      fontSize: "0.87rem",
                      letterSpacing: "0.5px",
                      color: "#888",
                    }}
                  >
                    {product.account_Type}
                  </Typography>
                </Box>
              }
            />
            <Box sx={{ marginBottom: "10px" }}>
              {product.image_Url && product.image_Url.length > 1 ? (
                <CustomCarousel
                  onSlideChange={(slideIndex) =>
                    handleSlideChange(index, slideIndex)
                  }
                >
                  {product.image_Url.map((img, i) => (
                    <div key={i}>
                      <img className={styles["carousel-image"]} src={img} />
                    </div>
                  ))}
                </CustomCarousel>
              ) : (
                <div>
                  <img
                    className={styles["carousel-image"]}
                    src={product.image_Url ? product.image_Url[0] : ""}
                    alt="product-image"
                  />
                </div>
              )}
            </Box>

            <div>
              <div className={styles["product_Names"]}>
                {product.product_Name.length > 1
                  ? product.product_Name[activeSlideIndex[index] || 0]
                  : product.product_Name[0]}
              </div>
            </div>

            <div className="PriceRatingwrapper">
              <div>
                <div className={styles["price_Rating_Container"]}>
                  <div className="rating_Stars">
                    <StarComponent />
                  </div>
                  <div className={styles["product_Prices"]}>
                    {product.product_Price.length > 1
                      ? CurrencyFormatter(product.product_Price[activeSlideIndex[index] || 0])
                      : CurrencyFormatter(product.product_Price[0])}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["actions"]}>
              <div>
                <IconButton>
                  <HeartIcon className={styles['action_Icons']} />{" "}
                  <span className={styles["action_Count"]}>0</span>
                </IconButton>
                <IconButton>
                  <ChatBubble className={styles['action_Icons']} />{" "}
                  <span className={styles["action_Count"]}>0</span>
                </IconButton>
                <IconButton>
                  <ShareIcon className={styles['action_Icons']} />{" "}
                  <span className={styles["action_Count"]}>0</span>
                </IconButton>
                <IconButton>
                  <RefreshIcon className={styles['action_Icons']} />{" "}
                  <span className={styles["action_Count"]}>0</span>
                </IconButton>
              </div>

              <div className="button_Bookmark_Icon">
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{
                    mr: 2,
                    fontSize: "12px",
                    textTransform: "capitalize",
                    letterSpacing: "1px",
                  }}
                >
                  Add to Cart
                </Button>
                <IconButton aria-label="bookmark">
                  <BookmarkIcon />
                </IconButton>
              </div>
            </div>

            {
              product.product_Details.length > 1 ? <ReadMore text={product.product_Details[activeSlideIndex[index] || 0]} maxLength={100}/> :
                <ReadMore text={product.product_Details[0]} maxLength={100} />
            }
            
          </Card>
        ))}

        {/* Video Post Types */}
        {videoPostType[0].video?.map((video, index) => (
          <div key={index}>
            <Card
              sx={{ maxWidth: 600 }}
              variant="outlined"
              className={styles["card"]}
            >
              <CardHeader
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                avatar={
                  video.avatar ? <ProfileAvatar {...video.avatar} /> : null
                }
                action={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="success"
                      size="small"
                      sx={{
                        mr: 2,
                        fontSize: "12px",
                        textTransform: "capitalize",
                        letterSpacing: "1px",
                      }}
                    >
                      Follow
                    </Button>
                    <IconButton aria-label="settings" onClick={handleMenuOpen}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiPaper-root": {
                        boxShadow: "none",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "10px",
                        color: "#333",
                        backgroundColor: "#f9f9f9",
                        width: '100px',
                        letterSpacing: '1px'
                      },
                    }}
                  >
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px', padding: '6px' }}>Report</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px', padding: '6px' }}>Block</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px', padding: '6px' }}>Message</MenuItem>
                  </Menu>
                  </Box>
                }
                title={
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "1rem",
                      letterSpacing: "1px",
                      color: "#333",
                    }}
                    gutterBottom
                  >
                    {video.avatar?.user_Name}
                  </Typography>
                }
                subheader={
                  <Box>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        fontSize: "0.87rem",
                        letterSpacing: "0.5px",
                        color: "#888",
                      }}
                    >
                      {video.account_Type}
                    </Typography>
                  </Box>
                }
              />

              <Box sx={{ marginBottom: "10px" }}>
                {video.url && video.url.length > 1 ? (
                  <CustomCarousel
                    onSlideChange={(slideIndex) =>
                      handleSlideChange(index, slideIndex)
                    }
                  >
                    {video.url.map((video, videoIndex) => {
                      const combinedIndex = videoCount++;
                      return (
                        <div
                          className={styles["video-wrapper"]}
                          key={combinedIndex}
                        >
                          <video
                            key={videoIndex}
                            src={video}
                            ref={(el) => {
                              refs.current[combinedIndex] = el;
                              videoRefs.current[combinedIndex] = el; //update the ref in the useToggleMute
                            }}
                            autoPlay={
                              entries[combinedIndex]?.isIntersecting || false
                            }
                            muted={muteStatus[combinedIndex]}
                            className={styles["carousel-image"]}
                            controls={false}
                          />
                          <div className={styles["mute-icon"]}>
                            <IconButton
                              onClick={() => toggleMuteStatus(combinedIndex)}
                            >
                              {muteStatus[combinedIndex] ? (
                                <VolumeOff className={styles["icon_Mute"]} />
                              ) : (
                                <VolumeUp className={styles["icon_Mute"]} />
                              )}
                            </IconButton>
                          </div>
                        </div>
                      );
                    })}
                  </CustomCarousel>
                ) : (
                  <div>
                    <video
                      key={index}
                      src={video.url ? video.url[0] : ""}
                      ref={(el) => (refs.current[index] = el)}
                      autoPlay={entries[index]?.isIntersecting || false}
                      muted
                      className={styles["carousel-image"]}
                      controls={false}
                    />
                  </div>
                )}
              </Box>

              <div className={styles["actions"]}>
                <div className="action_icons">
                  <IconButton className=" cursor-pointer">
                    <HeartIcon className={styles['action_Icons']} />{" "}
                    <span className={styles["action_Count"]}>0</span>
                  </IconButton>
                  <IconButton>
                    <ChatBubble className={styles['action_Icons']} />{" "}
                    <span className={styles["action_Count"]}>0</span>
                  </IconButton>
                  <IconButton>
                    <ShareIcon className={styles['action_Icons']} />{" "}
                    <span className={styles["action_Count"]}>0</span>
                  </IconButton>
                  <IconButton>
                    <RefreshIcon className={styles['action_Icons']} />{" "}
                    <span className={styles["action_Count"]}>0</span>
                  </IconButton>
                </div>

                <div className="button_Bookmark_Icon">
                  <IconButton aria-label="bookmark">
                    <BookmarkIcon />
                  </IconButton>
                </div>
              </div>

              {
                video.details && video.details.length > 1 ? 
                <ReadMore text={video.details[activeSlideIndex[index] || 0]}  maxLength={100} /> : 
                <ReadMore text={video.details?.[0] || 'text'} maxLength={100} />
              }

            </Card>
          </div>
        ))}
      </main>
    );
}

export default MainFeed;