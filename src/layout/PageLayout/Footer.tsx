import React from "react";
import Link from "next/link";
import { Anchor, Container, Divider, Flex, Stack, Text, ThemeIcon } from "@mantine/core";
import dayjs from "dayjs";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { JSONCrackLogo } from "../JsonCrackLogo";

export const Footer = () => {
  return (
    <Container mt={60} px={60} pb="xl" bg="black" fluid>
      <Divider color="gray.3" mb="xl" mx={-60} />
      <Flex justify="space-between">
        <Stack gap={4} visibleFrom="sm">
          <JSONCrackLogo />
        </Stack>
        <Flex gap={60} visibleFrom="sm">
          <Stack gap="xs">
            <Text fz="sm" c="white">
              Resources
            </Text>
            <Anchor component={Link} prefetch={false} fz="sm" c="gray.5" href="/#faq">
              FAQ
            </Anchor>
            <Anchor component={Link} prefetch={false} fz="sm" c="gray.5" href="/docs">
              Docs
            </Anchor>
          </Stack>
        </Flex>
      </Flex>
      <Flex gap="xl">
        <Text fz="sm" c="dimmed">
          © {dayjs().get("year")} JSON Crack
        </Text>
        <Anchor component={Link} prefetch={false} fz="sm" c="dimmed" href="/legal/terms">
          <Text fz="sm" c="dimmed">
            Terms
          </Text>
        </Anchor>
        <Anchor component={Link} prefetch={false} fz="sm" c="dimmed" href="/legal/privacy">
          <Text fz="sm" c="dimmed">
            Privacy
          </Text>
        </Anchor>
      </Flex>
    </Container>
  );
};
