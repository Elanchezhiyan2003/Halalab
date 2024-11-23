import React from 'react';
import { Clock, Users, MessageCircle, UserCheck } from 'lucide-react';

interface FeatureItemProps {
  icon: 'clock' | 'users' | 'message' | 'recruitment';
  title: string;
  description?: string;
  isExpanded?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, isExpanded }) => {
  const icons = {
    clock: <Clock className="w-6  h-6 text-blue-600" />,
    users: <Users className="w-6 h-6 text-gray-600" />,
    message: <MessageCircle className="w-6 h-6 text-gray-600" />,
    recruitment: <UserCheck className="w-6 h-6 text-gray-600" />
  };

  return (
    <div className={`flex items-start space-x-4  ${isExpanded ? 'mb-8' : 'mb-6'}`}>
      <div className="flex-shrink-0 mt-1">{icons[icon]}</div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium  text-gray-900">{title}</h3>
        {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
        {isExpanded && (
          <button className="mt-4 px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors">
            Learn more
          </button>
        )}
      </div>
    </div>
  );
}

export default FeatureItem;
