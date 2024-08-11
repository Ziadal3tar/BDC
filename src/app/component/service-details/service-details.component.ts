import { SharingService } from './../../services/sharing.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';
import { DateFormatPipe } from '../../services/date.pipe';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, NavComponent,DateFormatPipe],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',

})
export class ServiceDetailsComponent {
  constructor(private _Route: Router, private SharingService: SharingService) {}
  urlPart: any;
  paragraphs: any[] = [
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
  ];

  allServices: any[] = [
    {
      title: 'Brain Training',
      url: 'BrainTraining',
      descriptionription: 'descriptionription 1',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'Autism Program',
      url: 'AutismProgram',
      descriptionription: 'descriptionription 2',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'Family Program',
      url: 'FamilyProgram',
      descriptionription: 'descriptionription 3',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'PASS Programs',
      url: 'PASSPrograms',
      descriptionription: 'descriptionription 4',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'Assessments',
      url: 'Assessments',
      descriptionription: 'descriptionription 5',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
  ];
  allHelp: any[] = [
    {
      title: 'help1',
      url: 'help1',
      descriptionription: 'descriptionription 1',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'help2',
      url: 'help2',
      descriptionription: 'descriptionription 2',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'help3',
      url: 'help3',
      descriptionription: 'descriptionription 3',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'help4',
      url: 'help4',
      descriptionription: 'descriptionription 4',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
    {
      title: 'help5',
      url: 'help5',
      descriptionription: 'descriptionription 5',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      paragraphs: this.paragraphs,
    },
  ];
  disPlay: any;
  Similar: any[]=[];
  ngOnInit() {
    const urlSegments = this._Route.url.split('/');
    let urlPart = urlSegments[1];
    this.urlPart = urlPart;
    let servicePart = urlSegments[2];
    if (urlPart === 'services') {
      let service = this.allServices.filter(
        (item) => item.url == servicePart
      )[0];
      if (service) {
        this.disPlay = service;
      }
    } else if (urlPart === 'help') {
      let help = this.allHelp.filter((item) => item.url == servicePart)[0];
      if (help) {
        this.disPlay = help;
      }
    } else if (urlPart === 'blog') {
      this.SharingService.currentBlogs.subscribe((data: any) => {
        let blog = data.filter((item:any) => item.url == servicePart)[0];
        this.Similar = data.filter((item: any) => item.category === blog.category);


        if (blog) {
          this.disPlay = blog;
        }
      });
    }
  }
}
