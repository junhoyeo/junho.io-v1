import { motion } from 'framer-motion';

const GRADIENT_URL = `https://gradientgen.vercel.app/?colors=16181A,000,000,9BA1A6`;

export const Gradient: React.FC = () => {
  return (
    <>
      <div className="fixed-gradient">
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          src={GRADIENT_URL}
          style={{
            border: 'none',
            overflow: 'hidden',
            width: '100%',
            height: '100vh',
          }}
        />
      </div>
      <style jsx>{`
        .fixed-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }

        .fixed-gradient::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
        }
      `}</style>
    </>
  );
};
