import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import style from "./middlesidebar.module.css"
import userImg from "../../assets/pr_photo.webp"
import React, { useRef, useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { MdSend } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";


function MiddleSideBar() {
    return <div className={style.middle_part_container}>

        <div className={style.middle_part_post_creation_container}>
            <div className={style.middle_part_post_creation}>
                <div className={style.middle_part_post_creation_top}>
                    <div className={style.middle_part_post_creation_top_prof_img_container}>
                        <img src={userImg} alt="" />
                    </div>
                    <div className={style.middle_part_post_creation_top_post_description}>
                        <input type="text" placeholder="what is on your mind ?" />
                    </div>
                </div>

                <div className={style.middle_part_post_creation_bottom}>
                    bottom
                </div>
            </div>
        </div>

        <div className={style.posts_container}>
            <div className={style.post_parent_div}>
                {/* POST TOP SECTION */}
                <div className={style.post_top}>
                    {/* <div className={style.post_top_left}>
                    <div className={style.post_top_left_img_div}>
                        <img
                            className={style.post_top_left_img}
                            src={userImg}
                            alt=""
                        />
                    </div>
                    <div className={style.post_left_text}>
                        <h5 className={style.post_username}>username</h5>
                        <p className={style.post_date}>time ago</p>
                    </div>
                </div> */}
                    <div className={style.post_user_left}>
                        <div className={style.post_user_imgDiv}>
                            <img className={style.post_user_imgDiv_img} src={userImg} alt="" />
                        </div>
                        <div className={style.post_user_left_text}>
                            <p className={style.post_user_left_text_username}>Username</p>
                            <p className={style.post_user_left_text_userteam}>User team</p>
                        </div>
                    </div>
                    <div className={style.post_top_right}>
                        <BsThreeDots className={style.post_btn_icon} />
                    </div>
                </div>

                {/* POST DESC AND IMAGE */}
                <div className={style.post_center}>
                    <div className={style.post_center_desc}>
                        <p className={style.post_center_desc_text}>Post description...</p>
                    </div>
                    <div className={style.post_center_img_div}>
                        <img
                            className={style.post_center_img}
                            src={userImg}
                            alt=""
                        />
                        {/* <img
                        className={style.post_center_img}
                        src={userImg}
                        alt=""
                    /> */}

                    </div>
                </div>

                {/* LIKE AND COMMENT COUNTER */}
                <div className={style.post_bottom_wrapper}>
                    <div className={style.post_bottom}>
                        <div className={style.post_bottom_like}>
                            {/* <div className={style.post_img_like_div}>
                            <img
                                className={style.post_img_like}
                                src={userImg}
                                alt=""
                            />
                        </div> */}
                            <p className={style.post_like_text}>
                                <span>0</span> people liked it
                            </p>
                        </div>
                        <div className={style.post_bottom_comment}>
                            <span className={style.comment_count}>0</span>
                            <FaRegCommentAlt className={style.post_comment_icon} />
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className={style.post_bottom_like_btn}>
                        <div className={style.post_bottom_like_btn_func}>
                            <AiOutlineHeart className={style.like_func_icon} />
                            <span className={style.like_func_text}>Like</span>
                        </div>
                        <div className={style.post_bottom_like_btn_func}>
                            <RiShareForwardLine className={style.like_func_icon} />
                            <span className={style.like_func_text}>Share</span>
                        </div>
                    </div>

                    {/* COMMENT SECTION */}
                    {/* <div className={style.post_bottom_comment_section}>
                    <div className={style.post_bottom_comments_wrapper}>
                        <div className={style.no_comment_div}>
                            <p className={style.no_comment_div_p}>No comment yet !</p>
                        </div>
                    </div>

                    <div className={style.post_bottom_comment_input}>
                        <div className={style.post_bottom_comment_profPic_div}>
                            <img
                                className={style.post_bottom_comment_img}
                                src={userImg}
                                alt=""
                            />
                        </div>
                        <div className={style.post_bottom_comment_emoji}>
                            <input
                                className={style.comment_input}
                                type="text"
                                placeholder="Write a comment..."
                            />
                            <div className={style.emoji_btn_collec}>
                                <BsEmojiSmile className={style.emoji_btn} />
                            </div>
                            <button className={style.send_btn_comment}>
                                <MdSend className={style.comment_send_icon} />
                            </button>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
            <div className={style.post_parent_div}>
                {/* POST TOP SECTION */}
                <div className={style.post_top}>
                    {/* <div className={style.post_top_left}>
                    <div className={style.post_top_left_img_div}>
                        <img
                            className={style.post_top_left_img}
                            src={userImg}
                            alt=""
                        />
                    </div>
                    <div className={style.post_left_text}>
                        <h5 className={style.post_username}>username</h5>
                        <p className={style.post_date}>time ago</p>
                    </div>
                </div> */}
                    <div className={style.post_user_left}>
                        <div className={style.post_user_imgDiv}>
                            <img className={style.post_user_imgDiv_img} src={userImg} alt="" />
                        </div>
                        <div className={style.post_user_left_text}>
                            <p className={style.post_user_left_text_username}>Username</p>
                            <p className={style.post_user_left_text_userteam}>User team</p>
                        </div>
                    </div>
                    <div className={style.post_top_right}>
                        <BsThreeDots className={style.post_btn_icon} />
                    </div>
                </div>

                {/* POST DESC AND IMAGE */}
                <div className={style.post_center}>
                    <div className={style.post_center_desc}>
                        <p className={style.post_center_desc_text}>Post description...</p>
                    </div>
                    <div className={style.post_center_img_div}>
                        <img
                            className={style.post_center_img}
                            src={userImg}
                            alt=""
                        />
                        {/* <img
                        className={style.post_center_img}
                        src={userImg}
                        alt=""
                    /> */}

                    </div>
                </div>

                {/* LIKE AND COMMENT COUNTER */}
                <div className={style.post_bottom_wrapper}>
                    <div className={style.post_bottom}>
                        <div className={style.post_bottom_like}>
                            {/* <div className={style.post_img_like_div}>
                            <img
                                className={style.post_img_like}
                                src={userImg}
                                alt=""
                            />
                        </div> */}
                            <p className={style.post_like_text}>
                                <span>0</span> people liked it
                            </p>
                        </div>
                        <div className={style.post_bottom_comment}>
                            <span className={style.comment_count}>0</span>
                            <FaRegCommentAlt className={style.post_comment_icon} />
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className={style.post_bottom_like_btn}>
                        <div className={style.post_bottom_like_btn_func}>
                            <AiOutlineHeart className={style.like_func_icon} />
                            <span className={style.like_func_text}>Like</span>
                        </div>
                        <div className={style.post_bottom_like_btn_func}>
                            <RiShareForwardLine className={style.like_func_icon} />
                            <span className={style.like_func_text}>Share</span>
                        </div>
                    </div>

                    {/* COMMENT SECTION */}
                    {/* <div className={style.post_bottom_comment_section}>
                    <div className={style.post_bottom_comments_wrapper}>
                        <div className={style.no_comment_div}>
                            <p className={style.no_comment_div_p}>No comment yet !</p>
                        </div>
                    </div>

                    <div className={style.post_bottom_comment_input}>
                        <div className={style.post_bottom_comment_profPic_div}>
                            <img
                                className={style.post_bottom_comment_img}
                                src={userImg}
                                alt=""
                            />
                        </div>
                        <div className={style.post_bottom_comment_emoji}>
                            <input
                                className={style.comment_input}
                                type="text"
                                placeholder="Write a comment..."
                            />
                            <div className={style.emoji_btn_collec}>
                                <BsEmojiSmile className={style.emoji_btn} />
                            </div>
                            <button className={style.send_btn_comment}>
                                <MdSend className={style.comment_send_icon} />
                            </button>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>



        </div>

    </div>
}

export default MiddleSideBar