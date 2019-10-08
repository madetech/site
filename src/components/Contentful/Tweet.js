import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default function ContentfulTweet({ tweetId }) {
  return <TwitterTweetEmbed tweetId={tweetId} />
}
