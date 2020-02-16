import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../model/comment';
import {TokenStorageService} from '../../services/token-storage.service';
import {ActivatedRoute} from '@angular/router';
import {BookingService} from '../../services/booking.service';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() commentInfo: Comment;
  form: any = {};
  userNameBooking = '';
  idUserBooking: any;

  constructor(private tokenStorageService: TokenStorageService,
              private activatedRoute: ActivatedRoute,
              private bookingService: BookingService,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.getUserNameBooking();
    this.setIdUserBooking(this.userNameBooking);
  }

  addComment() {
    this.commentService.saveComment(this.createDataComment()).subscribe(result => {
      console.log(result);
    });
    this.reloadPage();
  }
  createDataComment(): any {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    return this.commentInfo = {
      idHome: id,
      idUser: this.idUserBooking,
      content: this.form.icomment
    };
  }
  getUserNameBooking(): void {
    this.userNameBooking = this.tokenStorageService.getUsername();
  }
  setIdUserBooking(nameUser: any) {
    this.bookingService.getIdUserBooking(nameUser).subscribe(result =>
      this.idUserBooking = result);
  }
  reloadPage() {
    window.location.reload();
  }
}
