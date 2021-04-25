import React from "react";
import NavBar from "./NavBar";

describe("NavBar tests", () => {
    const props = {
      "mountains" : [
        {
          "id": "7",
          "name": "Mount Pilchuck",
          "height": "5327 feet",
          "image": {
              "_height": "619",
              "_url": "https://www.wta.org/site_images/hikes/mount-pilchuck-by-day-hike.jpg/@@images/45b388b1-1ef8-4a37-a017-9b0a25a137b8.jpeg",
              "_width": "1100"
          },
          "text": "Mount Pilchuck is a popular hiking destination for everyone from intermediate to experienced hikers. You may have also heard this mountain's name in association with local glass artist, Dale Chihuly, who founded a glassblowing school in the area",
          "details": {
              "image_url": "https://www.wta.org/site_images/hikes/mount-pilchuck-by-day-hike.jpg/@@images/45b388b1-1ef8-4a37-a017-9b0a25a137b8.jpeg",
              "detail": "Despite its intermediate difficulty, Mount Pilchuck sees a slew of visitors in a given year, as hikers flock to the trail for its grand panoramic views and historic restored fire lookout. Easily one of the most rewarding hikes in the area, its relatively short 2.7 mile, 2,300 feet ascent gifts you 360-degree views of Mount Baker, Mount Rainier and the Olympics from its shelter lookout, which sits nestled on a summit that tops out around 5,300 feet. This calf-friendly journey is all made possible by a high elevation trailhead, which sets you off on your travels around 3,000 feet, cutting what would otherwise be an arduous ten mile roundtrip in half. Don’t let Pilchuck’s popularity fool you, however. Even with its heavy foot traffic and respectable grade, this peak should not be mistaken for a bunny hill. There are perilous elements, especially in winter, when snow may obscure the path, leading hikers to improvise and become lost. Hikers often have to be rescued from the mountain, so please take all the necessary precautions before tackling the trail. It is always encouraged that you check in with the ranger and sign the registry at the trailhead before starting your journey. To begin, depart the trailhead and reach an immediate fork. The left trail is a false path, so steer right and get your feet wet crossing a stream, christening your journey up Mount Pilchuck. After about a quarter mile, you will see an “entering Pilchuck State Park” sign. It's seen better days, but it reaffirms your course and destination. There is sparse signage from this point on. It is not a particularly hazardous trail early on, but depending on the season, you could be dealing with rocky, snowy and wet conditions on the latter part of the trip, so be prepared for anything. Traction devices and poles are strongly encouraged if snow is present on the trail.You will encounter a scree slope at the one-mile mark (the elevation marker should be about 3,500 feet for reference). Do not attempt to scramble upward. Instead, look for an orange marker that guide you left through the boulder field and lead you back to the defined trail. After another half mile, you will depart the forest and reach a clearing. Unless cloud cover is obscuring it, the fire lookout should be visible at the summit. Use this landmark as reference, as hikers have been known to gravitate toward false summits and place themselves in danger. After snaking up the exposed slope, you will reach the cone of the summit. There should be a brown “Parking Area” sign on a tree pointing returning hikers back down the slope you have just hiked up. This will be the last vestige of signage before reaching the lookout. If you do not see this sign and are not confident of your whereabouts, it is possible that you have wandered toward one of the false summits. On the right trail, you will continue on, winding around the peak until you eventually reach the top of the mountain and its sublime restored fire lookout. Sit, eat and enjoy your time in the shelter. Originally constructed in 1921 (almost ten years after the first trail on the mountain was established), the fire lookout now stands today as a proud landmark for the area. The shelter has endured numerous renovations over the years and continues to be one of the most popular and in-demand lunch spots in Washington. Reservations are not necessary, however, as even on the busiest of days, spirits are high with summiters and the atmosphere is always welcoming and inclusive, even between large parties that camp out on the benches and outlying boulders. It’s hard not to find a smiling face on top of this picturesque peak. A social mountain, indeed. And one that should not be missed."
          }
      }
      ]
        
      
    } 
      
    

    
    it("renders correctly", () => {
      const { container } = render(<NavBar {...props}/>);
      expect(container).toMatchSnapshot();
    });
});