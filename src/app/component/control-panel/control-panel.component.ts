import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent {

    title: string = 'Blog Details';
    inputTitle: string = 'Blog Title';
    inputDesc: string = 'Blog Description';
    inputTitleData: string = '';
    inputDescData: string = '';
    numOfPar: any;
    num: number = 0;
image:any
    blog: any = {
      blogTitle: '',
      blogDescription: '',
      blogImage: '',
      Paragraphs: [{
        ParagraphTitle: '',
        ParagraphDescription: '',
        ParagraphImage: '',
      }]
    };

    next() {
     if (this.numOfPar > 0) {
      if (this.num === 0) {
        this.addBlogDetails();
      } else if (this.num <= this.numOfPar!) {
        this.addParagraph();
      }else{
        // this.addParagraph();

        this.finalizeBlog()
      }
     }

    }

    // prev() {
    //   if (this.num > 1) {
    //     this.num--;
    //     this.updateFormForParagraph(this.num);
    //   }else{
    //     this.num--;

    //     this.backToBlog()
    //   }

    //   console.log('prev');

    // }

    addBlogDetails() {
      this.blog.blogTitle = this.inputTitleData;
      this.blog.blogDescription = this.inputDescData;
      this.resetInputFields();
      this.num++;
      this.updateFormForParagraph(this.num);

    }

    addParagraph() {
      this.blog.Paragraphs.push({
        ParagraphTitle: this.inputTitleData,
        ParagraphDescription: this.inputDescData,
        ParagraphImage: ''
      });
      this.resetInputFields();
      this.num++;
      if (this.num <= this.numOfPar!) {
        this.updateFormForParagraph(this.num);
      } else {
        this.finalizeBlog();
      }

    }

    updateFormForParagraph(paragraphNumber: number) {
      this.title = `Paragraph ${paragraphNumber}`;
      this.inputTitle = `Paragraph ${paragraphNumber} Title`;
      this.inputDesc = `Paragraph ${paragraphNumber} Description`;

    }

    resetInputFields() {

      this.inputTitleData = '';
      this.inputDescData = '';
    }

    finalizeBlog() {
      // window.location.reload();

      console.log('Blog Completed:', this.blog);
    }

    onImageSelected(event: any) {
      const file = event.target.files[0];
      this.image = file;
    }

    isBlogDetails(): boolean {

      return this.title === 'Blog Details';
    }
    backToBlog(){
      this.title = `Blog Details`;
      this.inputTitle = `Blog Title`;
      this.inputDesc = `Blog Description`;
    }
  }
