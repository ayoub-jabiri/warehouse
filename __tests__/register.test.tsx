import { render, screen } from "@testing-library/react";
import Page from "@/app/(auth)/register/page";

describe("Register page", () => {
    test("should ", () => {
        render(<Page />);

        const form = screen.getByRole("form");

        expect(form).toBeInTheDocument();
    });
});
