'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const InfiniteImageScroll = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const colors = useMemo(() => [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ], []);

  const fetchMoreBlocks = useCallback(() => {
    setLoading(true);
    const newBlocks = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      color: colors[Math.floor(Math.random() * colors.length)],
      height: Math.floor(Math.random() * 200 + 100)
    }));
    setBlocks(prevBlocks => [...prevBlocks, ...newBlocks]);
    setLoading(false);
  }, [colors]);

  useEffect(() => {
    fetchMoreBlocks();
    const container = containerRef.current;
    const handleScroll = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 500 && !loading) {
        fetchMoreBlocks();
      }
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [loading, fetchMoreBlocks]);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll">
      <div className="columns-2 md:columns-3 gap-4 p-4 space-y-4">
        {blocks.map((block) => (
          <div key={block.id} className="break-inside-avoid mb-4">
            <div 
              className={`w-full ${block.color} rounded-lg`} 
              style={{ height: `${block.height}px` }}
            ></div>
          </div>
        ))}
      </div>
      {loading && <p className="text-center py-4">Loading more blocks...</p>}
    </div>
  );
};

export default InfiniteImageScroll;
