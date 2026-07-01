"use client";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import { useEffect } from "react";

const CHANNEL_TALK_PLUGIN_KEY =
  process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY ||
  "ffa758b3-c304-433a-9f6f-fd5925945e0f";

export default function ChannelTalkClient() {
  useEffect(() => {
    if (!CHANNEL_TALK_PLUGIN_KEY) return;

    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: CHANNEL_TALK_PLUGIN_KEY,
      language: "ko",
    });

    return () => {
      ChannelService.shutdown();
    };
  }, []);

  return null;
}
