import React from 'react';
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";
const Sidebar = ({ selectTab, setselectTab }) => {
    console.log({ selectTab });
    return (
        <div className="sidebar">
            <div className={selectTab === "INBOX" ? "active" : ""} onClick={() => setselectTab("INBOX")}>
                <FaInbox className="icon" />
                Inbox
            </div>
            <div className={selectTab === "TODAY" ? "active" : ""} onClick={() => setselectTab("TODAY")}>
                <FaRegCalendarAlt className="icon" />
                Today
            </div>
            <div className={selectTab === "NEXT_7" ? "active" : ""} onClick={() => setselectTab("NEXT_7")}>
                <FaRegCalendar className="icon" />
                Next 7 days
            </div>
        </div>
    )
}

export default Sidebar;
