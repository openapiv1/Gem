# replit.md

## Overview

This is an AI-powered computer use demonstration application built with Next.js that showcases Anthropic Claude 3.5 Sonnet's computer automation capabilities. The app provides a chat interface where users can instruct an AI agent to perform computer tasks like taking screenshots, clicking, typing, and running bash commands. The AI operates within a secure sandbox environment provided by e2b, allowing safe execution of computer use actions without affecting the host system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15.2.1 with App Router for modern React development
- **UI Components**: Built with shadcn/ui component library using Radix UI primitives
- **Styling**: Tailwind CSS with custom theme variables and animations
- **State Management**: AI SDK React hooks for chat state and message handling
- **Layout**: Responsive design with resizable panels for desktop/mobile views

### Backend Architecture
- **API Routes**: Next.js API routes handle chat interactions and sandbox management
- **AI Integration**: Vercel AI SDK provides streaming text responses and tool calling capabilities
- **Computer Use Tools**: Custom tools for screenshot capture, mouse/keyboard interactions, and bash command execution
- **Message Processing**: Message pruning and optimization for token efficiency

### Sandbox Environment
- **Provider**: e2b desktop sandbox for secure code execution
- **Resolution**: Fixed 1024x768 display resolution for consistent interactions
- **Lifecycle Management**: Automatic sandbox creation, connection, and cleanup
- **Streaming**: Real-time desktop streaming for visual feedback

### Chat System
- **Streaming**: Real-time message streaming with loading states
- **Tool Calling**: Multi-step tool execution with computer use and bash capabilities
- **Error Handling**: Comprehensive error handling with user feedback via toast notifications
- **Auto-scroll**: Automatic scrolling to latest messages on both mobile and desktop

## External Dependencies

### AI Services
- **Anthropic**: Claude 3.5 Haiku model for computer use capabilities via AI SDK
- **Vercel AI SDK**: Core framework for AI interactions, streaming, and tool calling

### Sandbox Infrastructure
- **e2b Desktop**: Secure sandbox environment for computer use operations
- **e2b Streaming**: Real-time desktop streaming and interaction capabilities

### UI and Styling
- **shadcn/ui**: Pre-built accessible UI components
- **Radix UI**: Headless UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom animations
- **Lucide React**: Icon library for consistent iconography
- **Motion**: Animation library for smooth UI transitions

### Development Tools
- **TypeScript**: Type safety and developer experience
- **Next Themes**: Dark/light mode theme management
- **React Markdown**: Markdown rendering with GitHub Flavored Markdown support
- **Sonner**: Toast notification system for user feedback

### Analytics and Monitoring
- **Vercel Analytics**: Application performance and usage analytics