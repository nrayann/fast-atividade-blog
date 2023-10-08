import { BrowserRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";

import Post from "../../pages/Post";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

describe("Post component", () => {
  test("should render a post", async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve(blogMockResponse),
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve(userMockResponse),
        })
      );

    render(
      <BrowserRouter>
        <Post />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Defense the travel.")).toBeInTheDocument();
    });
  });
});

const blogMockResponse = {
  success: true,
  message: "blog fetched successfully",
  blog: {
    user_id: 19,
    title: "Defense the travel.",
    content_text:
      "Money form live strategy consider finally. Must time lose trade force will usually. Night bar deep method left.\nInformation better up\nHouse since there policy nothing book scene authority. Out notice even finish middle I. House since there policy nothing book scene authority. Out notice even finish middle I. House since there policy nothing book scene authority. Out notice even finish middle I.\nProvide soon particularly scene course. Customer few your. Ability question through kind guess. Provide soon particularly scene course. Customer few your. Ability question through kind guess. Provide soon particularly scene course. Customer few your. Ability question through kind guess.\nExplain condition base much drive. Page visit hour home meeting western Mrs. Explain condition base much drive. Page visit hour home meeting western Mrs. Explain condition base much drive. Page visit hour home meeting western Mrs.\nEvery age imagine almost figure four. Way sea serious old indeed happen thank.\nReturn quality director thousand rule\nTalk offer both fall support plan. Talk offer both fall support plan. Talk offer both fall support plan.\nIn who chair second base fund. In who chair second base fund. In who chair second base fund.\nModern several term. Can fact pull agent gas. Modern several term. Can fact pull agent gas. Modern several term. Can fact pull agent gas.\nFall thought former spend education. Start issue church quite.\nLive my house himself\nWar stop gas test make. Wish stop yeah away result to. War stop gas test make. Wish stop yeah away result to. War stop gas test make. Wish stop yeah away result to.\nRich above may animal mean five feel. Modern parent entire peace her. To body history citizen rich Democrat. Rich above may animal mean five feel. Modern parent entire peace her. To body history citizen rich Democrat. Rich above may animal mean five feel. Modern parent entire peace her. To body history citizen rich Democrat.\nEducation final green opportunity. Begin doctor possible modern. Education final green opportunity. Begin doctor possible modern. Education final green opportunity. Begin doctor possible modern.\nPass lot notice would physical. Rate beyond hospital know sing decision over situation.\nNot a test not down media\nOthers hand different health discuss store. Who movement red then tell. Both of represent least beat audience. Others hand different health discuss store. Who movement red then tell. Both of represent least beat audience. Others hand different health discuss store. Who movement red then tell. Both of represent least beat audience.\nCouple it city that important bag. Last box land identify case skin while again. Take during water whatever best hospital be. Couple it city that important bag. Last box land identify case skin while again. Take during water whatever best hospital be. Couple it city that important bag. Last box land identify case skin while again. Take during water whatever best hospital be.\nAlong must animal positive soldier. Someone member answer specific weight customer movement. Along must animal positive soldier. Someone member answer specific weight customer movement. Along must animal positive soldier. Someone member answer specific weight customer movement.\nThrough above all simple only nor Mr. Response international report address Democrat alone. No cold eye travel sing.\nLike practice heart fire industry\nPlayer wide make federal. Lawyer task reach ten knowledge real important. Hot high TV. Player wide make federal. Lawyer task reach ten knowledge real important. Hot high TV. Player wide make federal. Lawyer task reach ten knowledge real important. Hot high TV.\nPublic husband gas leader. Public husband gas leader. Public husband gas leader.\n",
    photo_url: "https://api.slingacademy.com/public/sample-blog-posts/1.png",
    created_at: "2023-03-16T19:06:12.184269",
    id: 1,
    description: "Role set leader structure.",
    content_html:
      "<p>Money form live strategy consider finally. Must time lose trade force will usually. Night bar deep method left.</p><h2>Wear travel manager radio serious hear catch green</h2><p>House since there policy nothing book scene authority. Out notice even finish middle I. House since there policy nothing book scene authority. Out notice even finish middle I. House since there policy nothing book scene authority. Out notice even finish middle I.</p><p>Provide soon particularly scene course. Customer few your. Ability question through kind guess. Provide soon particularly scene course. Customer few your. Ability question through kind guess. Provide soon particularly scene course. Customer few your. Ability question through kind guess.</p><p>Explain condition base much drive. Page visit hour home meeting western Mrs. Explain condition base much drive. Page visit hour home meeting western Mrs. Explain condition base much drive. Page visit hour home meeting western Mrs.</p><p>Every age imagine almost figure four. Way sea serious old indeed happen thank.</p><h2>Once late it own those</h2><p>Talk offer both fall support plan. Talk offer both fall support plan. Talk offer both fall support plan.</p><p>In who chair second base fund. In who chair second base fund. In who chair second base fund.</p><p>Modern several term. Can fact pull agent gas. Modern several term. Can fact pull agent gas. Modern several term. Can fact pull agent gas.</p><p>Fall thought former spend education. Start issue church quite.</p><h2>Must no company difficult keep talk world least</h2><p>War stop gas test make. Wish stop yeah away result to. War stop gas test make. Wish stop yeah away result to. War stop gas test make. Wish stop yeah away result to.</p><p>Rich above may animal mean five feel. Modern parent entire peace her. To body history citizen rich Democrat. Rich above may animal mean five feel. Modern parent entire peace her. To body history citizen rich Democrat. Rich above may animal mean five feel. Modern parent entire peace her. To body history citizen rich Democrat.</p><p>Education final green opportunity. Begin doctor possible modern. Education final green opportunity. Begin doctor possible modern. Education final green opportunity. Begin doctor possible modern.</p><p>Pass lot notice would physical. Rate beyond hospital know sing decision over situation.</p><h2>Chance possible face certain</h2><p>Others hand different health discuss store. Who movement red then tell. Both of represent least beat audience. Others hand different health discuss store. Who movement red then tell. Both of represent least beat audience. Others hand different health discuss store. Who movement red then tell. Both of represent least beat audience.</p><p>Couple it city that important bag. Last box land identify case skin while again. Take during water whatever best hospital be. Couple it city that important bag. Last box land identify case skin while again. Take during water whatever best hospital be. Couple it city that important bag. Last box land identify case skin while again. Take during water whatever best hospital be.</p><p>Along must animal positive soldier. Someone member answer specific weight customer movement. Along must animal positive soldier. Someone member answer specific weight customer movement. Along must animal positive soldier. Someone member answer specific weight customer movement.</p><p>Through above all simple only nor Mr. Response international report address Democrat alone. No cold eye travel sing.</p><h2>Certainly recognize yourself soon mind</h2><p>Player wide make federal. Lawyer task reach ten knowledge real important. Hot high TV. Player wide make federal. Lawyer task reach ten knowledge real important. Hot high TV. Player wide make federal. Lawyer task reach ten knowledge real important. Hot high TV.</p><p>Public husband gas leader. Public husband gas leader. Public husband gas leader.</p>",
    category: "love",
    updated_at: "2023-03-16T19:06:12.184272",
  },
};

const userMockResponse = {
  success: true,
  message: "fetched sample user whoose id is 19",
  user: {
    id: 19,
    gender: "male",
    date_of_birth: "1985-05-30T00:00:00",
    job: "Dealer",
    city: "New Whitney",
    zipcode: "07346",
    latitude: 43.750242,
    profile_picture: "https://api.slingacademy.com/public/sample-users/19.png",
    email: "jeffrey.graham.19@slingacademy.com",
    first_name: "Jeffrey",
    last_name: "Graham",
    phone: "537-204-3680x038",
    street: "450 Jason Squares",
    state: "Kentucky",
    country: "Faroe Islands",
    longitude: -8.297046,
  },
};
