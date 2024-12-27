import SiteLayout from "@/components/site-layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight } from "lucide-react";

// This would typically come from your CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI: Transforming Work in 2024 and Beyond",
    excerpt:
      "Explore how artificial intelligence is reshaping the workplace and what it means for professionals across industries.",
    image: "/blog/future-ai.jpg",
    category: "AI Insights",
    author: {
      name: "Sarah Chen",
      image: "/team/sarah.jpg",
    },
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "10 Ways to Optimize Your AI Workflow",
    excerpt:
      "Learn practical tips and strategies to make the most of AI tools in your daily work routine.",
    image: "/blog/workflow.jpg",
    category: "Tutorials",
    author: {
      name: "Michael Roberts",
      image: "/team/michael.jpg",
    },
    date: "Mar 12, 2024",
    readTime: "8 min read",
  },
  // Add more blog posts...
];

const categories = [
  "All Posts",
  "AI Insights",
  "Tutorials",
  "Case Studies",
  "Company News",
  "Product Updates",
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Insights & Updates from Mantice AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the latest in AI technology, tutorials, and company
              updates.
            </p>
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y bg-muted/50">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">
                {blogPosts[0].category}
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="hover:text-primary transition-colors"
                >
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={blogPosts[0].author.image}
                    alt={blogPosts[0].author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{blogPosts[0].author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {blogPosts[0].date} · {blogPosts[0].readTime}
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${blogPosts[0].id}`} className="gap-2">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <Badge variant="secondary" className="mb-2">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights and updates delivered directly to your
              inbox.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-sm flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
