import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Chad Sleepington",
    username: "@sleepinfluencer",
    rating: 5,
    content: "This mattress literally changed my life. I went from 0 followers to 10K overnight just from posting my sleep routine. The mattress is comfortable too, I guess. 🛏️✨",
    avatar: "CS"
  },
  {
    name: "Karen Dreamweaver", 
    username: "@momof3andtired",
    rating: 5,
    content: "I can finally sleep through my kids' TikTok dances at 3am. This mattress blocks out everything. Even my husband's snoring is now just background noise. LIFE CHANGING! 😴👑",
    avatar: "KD"
  },
  {
    name: "Dr. Bedtime PhD",
    username: "@sleepscience420",
    rating: 5,
    content: "As a professional sleeper with 15 years of napping experience, I can confirm this mattress is scientifically proven to be comfy. My research shows 100% more comfort than sleeping on the floor. 🔬💤",
    avatar: "DB"
  },
  {
    name: "Gen Z Sleeper",
    username: "@nocapbussin",
    rating: 5,
    content: "no cap this mattress is absolutely bussin fr fr. my sleep schedule is finally not giving chaotic energy. 10/10 would recommend to my 47 followers 💯🔥",
    avatar: "GZ"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-muted/30" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">What People Are Saying</h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from real people who really sleep (probably)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-viral-blue text-white font-bold">
                    {review.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.username}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{review.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold mb-2">Join 69,420+ Happy Sleepers</p>
          <p className="text-muted-foreground">
            *Results may vary. Viral status not guaranteed but highly probable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;