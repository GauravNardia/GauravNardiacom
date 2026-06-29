import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Divider } from "../components/Divider";
import { ProjectsSection } from "../components/ProjectsSection";
import { WritingSection } from "../components/WritingSection";
import { useState } from "react";
import { ExperienceSection } from "@/components/ExperienceSection";

export function Home() {
	const [showTooltip, setShowTooltip] = useState(false);
	const [tooltipText, setTooltipText] = useState("Copy email");

	const handleCopyEmail = (e: React.MouseEvent) => {
		e.preventDefault();
		const email = "gauravnardia07@gmail.com";

		// Fallback method using textarea
		const textArea = document.createElement("textarea");
		textArea.value = email;
		textArea.style.position = "fixed";
		textArea.style.left = "-999999px";
		textArea.style.top = "-999999px";
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			const successful = document.execCommand("copy");
			if (successful) {
				setTooltipText("Copied!");
				setTimeout(() => {
					setTooltipText("Copy email");
					setShowTooltip(false);
				}, 2000);
			}
		} catch (err) {
			console.error("Failed to copy text: ", err);
		} finally {
			document.body.removeChild(textArea);
		}
	};

	return (
		<div className='bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10'>
			<div className='flex flex-col gap-6 items-center w-full max-w-xl px-4 m-0'>
				{/* Header */}
				<div className='animate-in w-full'>
					<Header activePage='home' />
				</div>

				{/* Bio Content */}
				<div className='font-normal min-w-full relative shrink-0 text-olive-800 dark:text-olive-100 text-sm/6 text-justify flex flex-col gap-4'>
					<p className='relative animate-in animate-delay-1'>
						<span>I'm a full stack engineer who loves building things from zero to one. I've built systems like </span>
						<a
							href='https://better-vercel.com'
							target='_blank'
							rel='noopener noreferrer'
							className='link'>
							Better Vercel
						</a>
						<span> and </span>
						<a
							href='https://puffinanalytics.com'
							target='_blank'
							rel='noopener noreferrer'
							className='link'>
							Puffin Analytics
						</a>
						<span>
							{" "}and many more . Over the past 3 years, I've focused on building software that people
							love to use.
						</span>
					</p>
					<p className='animate-in animate-delay-2'>
						<span>I regularly </span>
						<a href='/writing' className='link font-normal'>
							write
						</a>
						<span>
							{" "}
							about my softwares, architectures, approach to building products, and hard-won lessons from
							my journey. These essays are my way of thinking through challenges and
							sharing what I've learned along the way.
						</span>
					</p>
					<p className='animate-in animate-delay-3'>
						<span>When I'm not building,</span>
						<span>
							{" "}
							I read books, learn about systems, think about the problem that we can solve. 
						</span>
					</p>
					<p className='animate-in animate-delay-4'>
						<span>
							If you're building something ambitious, I'd love to hear about it.{" "}
						</span>
						<span
							className='relative inline-block'
							onMouseEnter={() => setShowTooltip(true)}
							onMouseLeave={() => {
								if (tooltipText === "Copy email") {
									setShowTooltip(false);
								}
							}}>
							<button
								onClick={handleCopyEmail}
								className='link cursor-pointer bg-transparent border-none p-0 text-olive-800 dark:text-olive-100 text-sm font-medium'>
								Say hello
							</button>
							{showTooltip && (
								<span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-olive-800 dark:bg-olive-200 text-olive-50 dark:text-olive-800 rounded whitespace-nowrap'>
									{tooltipText}
								</span>
							)}
						</span>
						<span> or follow me on </span>
						<a
							href='https://peerlist.io/gauravnardia'
							target='_blank'
							rel='noopener noreferrer'
							className='link'>
							Peerlist
						</a>
						<span>, </span>
						<a
							href='https://x.com/gaurav_nardia'
							target='_blank'
							rel='noopener noreferrer'
							className='link'>
							X
						</a>
						<span>, or </span>
						<a
							href='https://www.linkedin.com/in/gauravnardia'
							target='_blank'
							rel='noopener noreferrer'
							className='link'>
							LinkedIn
						</a>
						<span>.</span>
					</p>
				</div>

				{/* Divider */}
				<div className='animate-in animate-delay-5'>
					<Divider />
				</div>

				{/* Projects Section */}
				<div className='animate-in animate-delay-6 w-full'>
					<ProjectsSection />
				</div>

				{/* Divider */}
				<div className='animate-in animate-delay-7'>
					<Divider />
				</div>

				{/* Experience Section */}
				<div className='animate-in animate-delay-6 w-full'>
					<ExperienceSection />
				</div>

				{/* Divider */}
				<div className='animate-in animate-delay-7'>
					<Divider />
				</div>

				{/* Writing Section */}
				<div className='animate-in animate-delay-8 w-full'>
					<WritingSection />
				</div>

				{/* Divider */}
				<div className='animate-in animate-delay-9'>
					<Divider />
				</div>

				{/* Footer */}
				<div className='animate-in animate-delay-10 w-full'>
					<Footer />
				</div>
			</div>
		</div>
	);
}
