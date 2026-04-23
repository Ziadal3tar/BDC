import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { Router, RouterModule } from '@angular/router';
import { DateFormatPipe } from '../../services/date.pipe';
import { SharingService } from './../../services/sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, NavComponent, DateFormatPipe, RouterModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private _Route: Router,
    private sharingService: SharingService
  ) {}

  // ================= STATE =================
  urlPart: string = '';
  disPlay: any;
  Similar: any[] = [];
  blogs: any[] = [];
  subscription!: Subscription;

  // ================= MOCK DATA =================
  paragraphs: any[] = [
    {
      title: 'Improve Focus',
      image: 'https://picsum.photos/800/500',
      description: 'Learn how to improve your focus using proven brain training techniques.',
    },
    {
      title: 'Mental Clarity',
      description: 'Achieve clarity and reduce mental noise with structured exercises.',
    },
    {
      title: 'Boost Memory',
      image: 'https://picsum.photos/800/500',
      description: 'Enhance your memory with daily habits and cognitive techniques.',
    },
  ];

  allServices: any[] = [
  {
    title: 'Brain Training',
    url: 'BrainTraining',
    description: 'Improve focus, memory, and cognitive performance through structured brain training exercises.',
    image: 'https://picsum.photos/900/500?random=1',
    paragraphs: [
      {
        title: 'What is Brain Training?',
        description: 'Brain training focuses on enhancing cognitive abilities such as attention, memory, and problem-solving using scientifically designed exercises.',
      },
      {
        title: 'Who is it for?',
        description: 'Suitable for students, professionals, and anyone looking to improve mental performance and productivity.',
        image: 'https://picsum.photos/800/400?random=2'
      },
      {
        title: 'Benefits',
        description: 'Improves focus, boosts memory, enhances decision-making skills, and increases mental clarity.',
      }
    ]
  },

  {
    title: 'Autism Program',
    url: 'AutismProgram',
    description: 'Specialized programs designed to support children with autism in developing cognitive and behavioral skills.',
    image: 'https://picsum.photos/900/500?random=3',
    paragraphs: [
      {
        title: 'Program Overview',
        description: 'Our autism program is tailored to help children improve communication, attention, and social interaction skills.',
      },
      {
        title: 'Personalized Approach',
        description: 'Each child receives a customized plan based on their needs and abilities.',
        image: 'https://picsum.photos/800/400?random=4'
      },
      {
        title: 'Expected Results',
        description: 'Better engagement, improved learning ability, and enhanced daily life skills.',
      }
    ]
  },

  {
    title: 'PASS Programs',
    url: 'PASSPrograms',
    description: 'Cognitive training programs based on PASS theory (Planning, Attention, Simultaneous, Successive).',
    image: 'https://picsum.photos/900/500?random=5',
    paragraphs: [
      {
        title: 'What is PASS?',
        description: 'PASS theory focuses on four key cognitive processes that are essential for learning and thinking.',
      },
      {
        title: 'How it Works',
        description: 'We assess and train each cognitive function to improve overall mental performance.',
        image: 'https://picsum.photos/800/400?random=6'
      },
      {
        title: 'Key Benefits',
        description: 'Enhances learning ability, problem-solving, and academic performance.',
      }
    ]
  },

  {
    title: 'Family Program',
    url: 'FamilyProgram',
    description: 'Helping families build better communication and support systems for mental development.',
    image: 'https://picsum.photos/900/500?random=7',
    paragraphs: [
      {
        title: 'Family Involvement',
        description: 'We work closely with families to create a supportive environment for growth.',
      },
      {
        title: 'Guidance & Support',
        description: 'Parents receive tools and strategies to support their children effectively.',
        image: 'https://picsum.photos/800/400?random=8'
      },
      {
        title: 'Outcome',
        description: 'Stronger relationships and improved emotional and cognitive development.',
      }
    ]
  },

  {
    title: 'Assessments',
    url: 'Assessments',
    description: 'Comprehensive cognitive and behavioral assessments to identify strengths and weaknesses.',
    image: 'https://picsum.photos/900/500?random=9',
    paragraphs: [
      {
        title: 'Initial Evaluation',
        description: 'We analyze cognitive abilities, attention span, and learning patterns.',
      },
      {
        title: 'Detailed Reports',
        description: 'Receive clear insights and recommendations for improvement.',
        image: 'https://picsum.photos/800/400?random=10'
      },
      {
        title: 'Next Steps',
        description: 'Based on results, we create a personalized development plan.',
      }
    ]
  }
];

 allHelp: any[] = [
  {
    title: 'Students',
    url: 'help1',
    description: 'Helping students improve focus, memory, and academic performance.',
    image: 'https://picsum.photos/900/500?random=11',
    paragraphs: [
      {
        title: 'Academic Challenges',
        description: 'Many students struggle with focus, memory retention, and exam pressure.',
      },
      {
        title: 'Our Approach',
        description: 'We use structured brain training techniques to enhance learning efficiency.',
        image: 'https://picsum.photos/800/400?random=12'
      },
      {
        title: 'Results',
        description: 'Better grades, improved concentration, and increased confidence.',
      }
    ]
  },

  {
    title: 'Professionals',
    url: 'help2',
    description: 'Helping professionals boost productivity, focus, and decision-making skills.',
    image: 'https://picsum.photos/900/500?random=13',
    paragraphs: [
      {
        title: 'Work Performance',
        description: 'Modern work environments require high focus and fast decision-making.',
      },
      {
        title: 'Mental Optimization',
        description: 'We train your brain to handle stress and improve productivity.',
        image: 'https://picsum.photos/800/400?random=14'
      },
      {
        title: 'Outcome',
        description: 'Better performance, reduced stress, and clearer thinking.',
      }
    ]
  },

  {
    title: 'Children',
    url: 'help3',
    description: 'Supporting children in developing cognitive and learning skills from an early age.',
    image: 'https://picsum.photos/900/500?random=15',
    paragraphs: [
      {
        title: 'Early Development',
        description: 'Childhood is the most critical stage for brain development.',
      },
      {
        title: 'Interactive Learning',
        description: 'We use engaging activities to improve attention and memory.',
        image: 'https://picsum.photos/800/400?random=16'
      },
      {
        title: 'Long-Term Impact',
        description: 'Stronger cognitive skills that support lifelong learning.',
      }
    ]
  },

  {
    title: 'Parents',
    url: 'help4',
    description: 'Helping parents understand and support their children’s cognitive growth.',
    image: 'https://picsum.photos/900/500?random=17',
    paragraphs: [
      {
        title: 'Parental Guidance',
        description: 'Parents play a key role in shaping their child’s development.',
      },
      {
        title: 'Tools & Strategies',
        description: 'We provide practical tools to support children at home.',
        image: 'https://picsum.photos/800/400?random=18'
      },
      {
        title: 'Stronger Relationships',
        description: 'Better communication and understanding within the family.',
      }
    ]
  },

  {
    title: 'Individuals',
    url: 'help5',
    description: 'Helping individuals improve mental clarity, focus, and overall brain performance.',
    image: 'https://picsum.photos/900/500?random=19',
    paragraphs: [
      {
        title: 'Self Development',
        description: 'Anyone can train their brain to perform better.',
      },
      {
        title: 'Personal Growth',
        description: 'We help you build habits that enhance mental performance.',
        image: 'https://picsum.photos/800/400?random=20'
      },
      {
        title: 'Achieve More',
        description: 'Improve productivity, clarity, and confidence in daily life.',
      }
    ]
  }
];

  // ================= INIT =================
  ngOnInit(): void {
    this.detectRoute();

    // subscribe مرة واحدة فقط
    this.subscription = this.sharingService.currentBlogs.subscribe((data: any) => {
      this.blogs = data || [];
      console.log(data);

      this.loadBlogIfNeeded();
    });
  }

  // ================= ROUTE HANDLING =================
  detectRoute() {
    const urlSegments = this._Route.url.split('/');
    this.urlPart = urlSegments[1];
    const slug = urlSegments[2];

    if (this.urlPart === 'services') {
      this.disPlay = this.allServices.find(item => item.url === slug);
    }

    if (this.urlPart === 'help') {
      this.disPlay = this.allHelp.find(item => item.url === slug);
    }
  }

  loadBlogIfNeeded() {
    if (this.urlPart !== 'blog') return;

    const slug = this._Route.url.split('/')[2];

    const blog = this.blogs.find(item => item.url === slug);

    if (!blog) return;

    this.disPlay = blog;

    this.Similar = this.blogs.filter(
      item => item.category === blog.category && item._id !== blog._id
    );
  }

  // ================= NAVIGATION =================
  toBlog(url: string) {
    this._Route.navigate(['/blog', url]);
  }

  // ================= CLEANUP =================
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
