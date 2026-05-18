import { useEffect, useMemo, useState } from 'react';

export const projectsData = [
  ['Banking_programm', 'CLI banking simulator with accounts and transfers.', 'https://github.com/Rezamollaei/Banking_programm'],
  ['Budget_Tracker', 'Track income, expenses, and monthly savings goals.', 'https://github.com/Rezamollaei/Budget_Tracker'],
  ['Calculator', 'Responsive calculator for everyday arithmetic.', 'https://github.com/Rezamollaei/Calculator'],
  ['Compres_Decompres_file', 'Compress and decompress files to save space.', 'https://github.com/Rezamollaei/Compres_Decompres_file'],
  ['Convert_Decimal_to_Binary', 'Convert decimal numbers to binary with steps.', 'https://github.com/Rezamollaei/Convert_Decimal_to_Binary'],
  ['Copy_text_file', 'Copy text files quickly with safe overwrites.', 'https://github.com/Rezamollaei/Copy_text_file'],
  ['Desktop_Cleaner', 'Organize desktop files into tidy folders.', 'https://github.com/Rezamollaei/Desktop_Cleaner'],
  ['Encode_Decode', 'Encode and decode messages with simple ciphers.', 'https://github.com/Rezamollaei/Encode_Decode'],
  ['File_handling', 'Practice file operations: read, write, update.', 'https://github.com/Rezamollaei/File_handling'],
  ['Guess_my_Number', 'Number guessing game with helpful hints.', 'https://github.com/Rezamollaei/Guess_my_Number'],
  ['Hangman', 'Classic hangman word-guessing challenge.', 'https://github.com/Rezamollaei/Hangman'],
  ['Language_Learning_App', 'Vocabulary practice with lessons and quizzes.', 'https://github.com/Rezamollaei/Language_Learning_App'],
  ['League_Maker_inprogress', 'Generate sports leagues and match fixtures.', 'https://github.com/Rezamollaei/League_Maker_inprogress'],
  ['Need_to_learn', 'Curated list of topics and learning tasks.', 'https://github.com/Rezamollaei/Need_to_learn'],
  ['Need_to_learn2', 'Follow-up learning tracker with new topics.', 'https://github.com/Rezamollaei/Need_to_learn2'],
  ['PROJECT1', 'Starter project exploring core programming basics.', 'https://github.com/Rezamollaei/PROJECT1'],
  ['Portfolio', 'Personal portfolio website with projects and contact.', 'https://github.com/Rezamollaei/Portfolio'],
  ['Quiz_Game', 'Multiple-choice quiz with instant scoring.', 'https://github.com/Rezamollaei/Quiz_Game'],
  ['Read_Write_File', 'Read and write file data via CLI.', 'https://github.com/Rezamollaei/Read_Write_File'],
  ['Rock_paper_scissors_game', 'Rock-paper-scissors game with score tracking.', 'https://github.com/Rezamollaei/Rock_paper_scissors_game'],
  ['TIC_TAC_TOE_GAME', 'Tic-tac-toe game with win detection.', 'https://github.com/Rezamollaei/TIC_TAC_TOE_GAME'],
  ['bank', 'Simple bank account manager in code.', 'https://github.com/Rezamollaei/bank'],
  ['football', 'Football match tracker with scores and stats.', 'https://github.com/Rezamollaei/football'],
  ['model_window', 'Modal window UI demo with animations.', 'https://github.com/Rezamollaei/model_window'],
  ['pig_game', 'Pig dice game with roll/hold mechanics.', 'https://github.com/Rezamollaei/pig_game'],
  ['pythonProject2', 'Python exercises and mini-projects collection.', 'https://github.com/Rezamollaei/pythonProject2']
].map(([title, description, githubUrl]) => ({
  title,
  description,
  githubUrl,
  liveUrl: null,
  imageUrl: '/assets/project-real-pc.svg'
}));

export const publicProjectsData = projectsData;

const wrap = (i, n) => ((i % n) + n) % n;

export const useProjectsCarousel = (total) => {
  const [active, setActive] = useState(1);
  const [mobile, setMobile] = useState(window.matchMedia('(max-width: 768px)').matches);
  const [animating, setAnimating] = useState(false);
  const [mobileDir, setMobileDir] = useState(0);

  useEffect(() => {
    const q = window.matchMedia('(max-width: 768px)');
    const update = () => setMobile(q.matches);
    update();
    q.addEventListener('change', update);
    return () => q.removeEventListener('change', update);
  }, []);

  const next = (dir) => {
    if (animating || total < 2) return;
    setAnimating(true);
    if (mobile) {
      setMobileDir(dir);
      setTimeout(() => {
        setActive((prev) => wrap(prev + dir, total));
        setTimeout(() => setAnimating(false), 1600);
      }, 500);
      return;
    }
    setActive((prev) => wrap(prev + dir, total));
    setTimeout(() => setAnimating(false), 1650);
  };

  const visible = useMemo(() => {
    if (mobile) return [active];
    return [wrap(active - 1, total), active, wrap(active + 1, total)];
  }, [active, mobile, total]);

  return { active, visible, mobile, next, animating, mobileDir };
};
