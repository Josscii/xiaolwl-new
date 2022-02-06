export interface CommentListApiResponse {
  ok: number;
  data?: {
    data: PartialComment[];
  };
}

export interface PartialComment {
  id: string;
  created_at: string;
  text: string;
  user: {
    screen_name: string;
    profile_image_url: string;
  };
}
