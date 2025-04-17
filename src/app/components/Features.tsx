import React from 'react';

export const Features = () => {
  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Get deep insights into your data with our powerful analytics tools.',
      icon: '📊'
    },
    {
      title: 'Real-time Updates',
      description: 'Stay up-to-date with live data streaming and instant notifications.',
      icon: '⚡'
    },
    {
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security measures.',
      icon: '🔒'
    },
    {
      title: 'Customizable Dashboards',
      description: 'Create personalized views that match your workflow perfectly.',
      icon: '🎨'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to make data-driven decisions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 