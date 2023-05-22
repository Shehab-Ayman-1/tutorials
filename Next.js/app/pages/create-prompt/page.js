"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Form } from "@/components";
import axios from "axios";

const CreatePrompt = () => {
	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: "", tag: "" });
	const { data: session } = useSession();
	const router = useRouter();

	const createPrompt = async (event) => {
		event.preventDefault();
		setSubmitting((s) => (s = true));
		try {
			const response = await axios.post("/api/prompt", { ...post, userId: session?.user.id || "" });
			if (response?.status === 200) router.push("/");
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting((s) => (s = false));
		}
	};

	return <Form type="create" submitting={submitting} post={post} setPost={setPost} handleSubmit={createPrompt} />;
};

export default CreatePrompt;
