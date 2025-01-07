import { BookOpen, Calculator } from 'lucide-react';
import type { SkillCard } from '@/types/practice';

export const skills: SkillCard[] = [
  {
    title: 'Reading & Writing',
    icon: BookOpen, 
    description: 'Master reading comprehension and writing skills',
    duration: '65 min',
    questions: 52,
    color: 'from-purple-600 to-purple-400',
    topics: [
      {
        name: 'Reading Comprehension',
        info: null
      },
      {
        name: 'Grammar & Usage',
        info: null
      },
      {
        name: 'Writing Style',
        info: null
      },
      {
        name: 'Vocabulary',
        info: {
          title: 'Words in Context',
          content: [
            {
              heading: 'Words in Context questions',
              text: 'These are the first questions you\'ll see in the Reading and Writing module. There are two types of Words in Context questions:',
              items: [
                'Blank in a passage: You select the best word to complete the sentence.',
                'Underlined word in a passage: You select a suitable replacement for the underlined word.'
              ]
            },
            {
              heading: 'Subscore',
              text: 'You receive a subscore in the Words in Context category, which is based on your answers to the questions in this category.'
            },
            {
              heading: 'Percentage of score',
              text: 'A little less than 20% of your SAT Evidence-Based Reading and Writing score comes from the Words in Context category.'
            },
            {
              heading: 'Number of questions',
              text: 'There are 18 Words in Context questions per test, with 10 in the Reading section and 8 in the Writing section.'
            },
            {
              text: 'The SAT also includes passages from various subject areas, such as academic journals, historical documents, or literary works. These passages may include technical and advanced vocabulary specific to their respective disciplines.'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Math',
    icon: Calculator,
    description: 'Master mathematical concepts and problem-solving',
    duration: '80 min',
    questions: 58,
    color: 'from-blue-600 to-blue-400',
    topics: [
      {
        name: 'Algebra and Functions',
        info: {
          title: 'Algebra and Functions',
          content: [{
            text: 'Operations on algebraic expressions; factoring; exponents; evaluating expressions with exponents and roots; solving equations; absolute value; direct translation into mathematical expressions; inequalities; systems of linear equations and inequalities; factoring; rational equations and inequalities; direct and inverse variation; word problems; and functions',
            items: ['19-21 questions']
          }]
        }
      },
      {
        name: 'Number and Operations',
        info: {
          title: 'Number and Operations',
          content: [{
            text: 'Properties of integers; arithmetic word problems; number lines; squares and square roots; fractions and rational numbers; factors, multiples, and remainders; prime numbers; ratios, proportions, and percents; sequences; sets; counting problems; and logical reasoning',
            items: ['11-13 questions']
          }]
        }
      },
      {
        name: 'Geometry and Measurement',
        info: {
          title: 'Geometry and Measurement',
          content: [{
            text: 'Geometric notation; points and lines; angles in the plane; triangles; quadrilaterals; areas and perimeters; other polygons; circles; solid geometry; geometric perception; coordinate geometry; and transformations',
            items: ['14-16 questions']
          }]
        }
      },
      {
        name: 'Data Analysis, Statistics, and Probability',
        info: {
          title: 'Data Analysis, Statistics, and Probability',
          content: [{
            text: 'Data interpretation; statistics; elementary probability; and geometric probability',
            items: ['6-7 questions']
          }]
        }
      }
    ]
  }
];