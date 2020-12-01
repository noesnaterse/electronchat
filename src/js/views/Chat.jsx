import React from 'react';
import { Link } from 'react-router-dom';

import ChatUsersList from '../components/ChatUsersList';
import ChatMessagesList from '../components/ChatMessagesList';
import ViewTitle from '../components/shared/ViewTitle';

export default function ChatView() {
    return (
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                <ChatUsersList />
            </div>
            <div className="col-9 fh">
                <ViewTitle />
                <ChatMessagesList />
            </div>
        </div>
    )
}
