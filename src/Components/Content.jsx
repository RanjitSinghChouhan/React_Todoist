import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Task from './Task';
const Content = () => {
    const [selectTab, setselectTab] = useState("INBOX");
    return (
        <section className="content">
            <Sidebar selectTab={selectTab} setselectTab={setselectTab} />
            <Task selectTab={selectTab} />
        </section>
    )
}

export default Content;
