import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const [visibleSection, setVisibleSection] = useState('all'); // Options: 'course', 'book', 'blog', 'all'

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Conditional rendering: element variable approach */}
      {(() => {
        switch (visibleSection) {
          case 'course':
            return <CourseDetails show={true} />;
          case 'book':
            return <BookDetails show={true} />;
          case 'blog':
            return <BlogDetails show={true} />;
          default:
            return (
              <>
                <CourseDetails show={true} />
                <BookDetails show={true} />
                <BlogDetails show={true} />
              </>
            );
        }
      })()}
    </div>
  );
}

export default App;
