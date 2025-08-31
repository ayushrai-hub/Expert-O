import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Bell, 
  Search, 
  MoreHorizontal, 
  Phone, 
  Video, 
  Paperclip, 
  Smile,
  User,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Filter,
  Archive,
  Trash2,
  Edit,
  Star
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  type: 'text' | 'file' | 'image';
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isOnline: boolean;
  type: 'direct' | 'project' | 'group';
}

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
}

const CommunicationSystem = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'chats' | 'notifications' | 'project-chat'>('chats');
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock chats data
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      name: 'John Client',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'When will the project be completed?',
      lastMessageTime: new Date('2024-02-20T10:30:00'),
      unreadCount: 2,
      isOnline: true,
      type: 'direct'
    },
    {
      id: '2',
      name: 'Sarah Talent',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'I\'ve uploaded the latest design files',
      lastMessageTime: new Date('2024-02-20T09:15:00'),
      unreadCount: 0,
      isOnline: false,
      type: 'direct'
    },
    {
      id: '3',
      name: 'E-commerce Project Team',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Meeting scheduled for tomorrow at 2 PM',
      lastMessageTime: new Date('2024-02-19T16:45:00'),
      unreadCount: 5,
      isOnline: true,
      type: 'project'
    },
    {
      id: '4',
      name: 'Design Team',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'New design guidelines uploaded',
      lastMessageTime: new Date('2024-02-19T14:20:00'),
      unreadCount: 1,
      isOnline: true,
      type: 'group'
    }
  ]);

  // Mock messages data
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'John Client',
      content: 'Hi! I wanted to check on the project progress',
      timestamp: new Date('2024-02-20T10:25:00'),
      isRead: true,
      type: 'text'
    },
    {
      id: '2',
      sender: user?.name || 'You',
      content: 'Hello! The project is progressing well. We\'re about 70% complete.',
      timestamp: new Date('2024-02-20T10:27:00'),
      isRead: true,
      type: 'text'
    },
    {
      id: '3',
      sender: 'John Client',
      content: 'That\'s great! When do you think it will be completed?',
      timestamp: new Date('2024-02-20T10:30:00'),
      isRead: false,
      type: 'text'
    }
  ]);

  // Mock notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Project Update',
      message: 'E-commerce project milestone completed',
      timestamp: new Date('2024-02-20T11:00:00'),
      type: 'success',
      isRead: false
    },
    {
      id: '2',
      title: 'New Message',
      message: 'You have 3 unread messages from John Client',
      timestamp: new Date('2024-02-20T10:30:00'),
      type: 'info',
      isRead: false
    },
    {
      id: '3',
      title: 'Payment Received',
      message: 'Payment of ₹50,000 received for Project Alpha',
      timestamp: new Date('2024-02-20T09:15:00'),
      type: 'success',
      isRead: true
    },
    {
      id: '4',
      title: 'Meeting Reminder',
      message: 'Team meeting in 30 minutes',
      timestamp: new Date('2024-02-20T08:45:00'),
      type: 'warning',
      isRead: true
    }
  ]);

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadNotifications = notifications.filter(n => !n.isRead);
  const unreadChats = chats.filter(chat => chat.unreadCount > 0);

  const sendMessage = () => {
    if (message.trim() && selectedChat) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: user?.name || 'You',
        content: message,
        timestamp: new Date(),
        isRead: false,
        type: 'text'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'warning':
        return <AlertCircle size={16} className="text-yellow-400" />;
      case 'error':
        return <AlertCircle size={16} className="text-red-400" />;
      default:
        return <Bell size={16} className="text-blue-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Communication Center</h1>
          <p className="text-gray-400 mt-1">Stay connected with clients, team members, and project updates</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell size={20} className="text-gray-400" />
            {unreadNotifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadNotifications.length}
              </span>
            )}
          </div>
          <button className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            <Plus size={16} className="mr-2" />
            New Chat
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-2">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('chats')}
            className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'chats'
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <MessageSquare size={18} className="mr-2" />
            Chats
            {unreadChats.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadChats.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'notifications'
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Bell size={18} className="mr-2" />
            Notifications
            {unreadNotifications.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadNotifications.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('project-chat')}
            className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'project-chat'
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <MessageSquare size={18} className="mr-2" />
            Project Chat
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl overflow-hidden">
        {activeTab === 'chats' && (
          <div className="flex h-96">
            {/* Chat List */}
            <div className="w-1/3 border-r border-gray-700">
              <div className="p-4 border-b border-gray-700">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search chats..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-full">
                {filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`p-4 border-b border-gray-700/50 cursor-pointer hover:bg-gray-700/30 transition-colors ${
                      selectedChat?.id === chat.id ? 'bg-gray-700/50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User size={20} className="text-white" />
                        </div>
                        {chat.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-white font-medium truncate">{chat.name}</p>
                          <span className="text-gray-400 text-xs">
                            {chat.lastMessageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unreadCount > 0 && (
                        <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User size={16} className="text-white" />
                        </div>
                        {selectedChat.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full border border-gray-800"></div>
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{selectedChat.name}</p>
                        <p className="text-gray-400 text-sm">
                          {selectedChat.isOnline ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-white">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white">
                        <Video size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === user?.name ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === user?.name
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-700 text-white'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === user?.name ? 'text-blue-100' : 'text-gray-400'
                          }`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-white">
                        <Paperclip size={20} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white">
                        <Smile size={20} />
                      </button>
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                      <button
                        onClick={sendMessage}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <Send size={20} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Select a chat</h3>
                    <p className="text-gray-400">Choose a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Notifications</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-white">
                  <Filter size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Archive size={16} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border ${
                    notification.isRead ? 'bg-gray-700/30 border-gray-600' : 'bg-blue-500/10 border-blue-500/20'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-medium">{notification.title}</h4>
                        <span className="text-gray-400 text-sm">
                          {notification.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                      <button className="p-1 text-gray-400 hover:text-white">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'project-chat' && (
          <div className="p-6">
            <div className="text-center py-12">
              <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Project Chat</h4>
              <p className="text-gray-400">Project-specific communication channels will be implemented here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationSystem;
