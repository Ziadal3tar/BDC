import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-aris7',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './aris7.component.html',
  styleUrl: './aris7.component.scss',
})
export class ARIS7Component {
  active = 1;
  types: any[] = [
    {
      img: './assets/circle.png',
      imgHover: './assets/circle1.png',
      title: 'READING & WRITING',
      descs: ['Reading and writing readiness include a combination of phonemic awareness, an understanding of basic print concepts, an ability to identify and to form the letters of the alphabet, as well as an understanding that letters represent sounds in language and what those sounds are. The ARIS Reading & Writing Readiness lessons cover the range of concepts which students must learn as preparation to read and write language.','The Reading & Writing Readiness content category has eight subcategories.'],

    },
    {
      img: './assets/circle.png',
      imgHover: './assets/circle2.png',
      title: 'APPROACHES TO LEARNING',
      descs:['The Approaches to Learning content category in ARIS includes lessons that provide a foundation for students to succeed in the rest of the program. In short, these lessons help a student learn how to learn.','Developing children’s abilities in the Approaches to Learning category prepares them for future learning, and many of the Approaches to Learning lessons are prerequisites for the lessons in the other 6 categories. As such, this is often the first place you will start with children who are new to the program.','The Approaches to Learning content category has seven sub-categories.'],
    },
    {
      img: './assets/circle.png',
      imgHover: './assets/circle3.png',
      title: 'LANGUAGE',
      descs:['The lessons in the ARIS Language content category are designed to provide students with basic language concepts and skills to help them communicate with the world around them, by naming and describing objects, making needs and desires known, and interacting or conversing with others.','The Language content category has four sub-categories.']

    },
    {
      img: './assets/circle.png',
      imgHover: './assets/circle4.png',
      title: 'MOTOR SKILLS',
      descs:['The ARIS Motor Skills content category contains lessons that will support the development of the fine and gross motor skills which most typically developing children acquire prior to entering kindergarten.','Motor skills enable children to participate in social and play-related activities such as coloring, crafts, and puzzles; sports and recreation; self-help activities like feeding, grooming, and dressing themselves; actions of independent living like opening containers, drawers, and doors; and academic skills like writing.','The Motor Skills content category has three sub-categories.'],
    },
    {
      img: './assets/circle.png',
      imgHover: './assets/circle5.png',
      title: 'MATHEMATICS',
      descs: [
        'Before kids are ready to do formal mathematics they must understand concepts like visual discrimination of shapes, recognition of patterns, number recognition, counting, and sets. Math skills provide a foundation for critical life skills such as measuring, comparison, time, and money.',
        'Language Builder ARIS Math Readiness lessons cover these pre-mathematics concepts as well as some basic addition and subtraction.',
        'The Math Readiness content category includes six subcategories.',
      ],
    },
    {
      img: './assets/circle.png',
      imgHover: './assets/circle6.png',
      title: 'SOCIAL EMOTIONAL',
      descs: [
        'The Collaborative for Academic Social Emotional Learning has identified five cognitive, affective, and behavioral competencies: self-awareness, self-management, social awareness, relationship skills, responsible decision making (“Casel - Casel,” n.d.).',
        'ARIS Social-Emotional content category provides concrete lessons to address these five behavioral competencies.',
      ],
    },
    {
      img: './assets/circle.png',
      imgHover: './assets/circle7.png',
      title: 'FUNCTIONAL ROUTINES',
      descs: [
        'Functional Routines are the regular events of daily living which require specific and organized behaviors to complete. Language Builder ARIS Functional Routines lessons address major functional routines required for children to accomplish self-care, as well as participation in typical family and classroom practices.',
        'The Functional Routines content category has three subcategories.',
      ],
    },
  ];
  onHover(index: any) {
    this.active = index;
    console.log(index);
  }
}
