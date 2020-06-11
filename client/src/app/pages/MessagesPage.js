import React, { } from 'react';

import { MessagesList } from '../components/message';

const MessagesPage = ({children}) => {
  return (

    <div className="col-12">
      <MessagesList />
      </div>
  );
};

export default MessagesPage;