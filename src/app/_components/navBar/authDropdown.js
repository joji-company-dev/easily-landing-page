import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function AuthDropdown({
  isLoggedIn,
  isLoading,
  userName,
  onLoginButtonClick,
  onLogoutButtonClick,
}) {
  if (isLoading) return null;

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="text-sm font-semibold text-muted-foreground"
              asChild
            >
              <Button variant="outline">환영합니다 {userName}!</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-b-xl border-none shadow-md bg-slate-50">
              <DropdownMenuItem asChild>
                <Link
                  href={`${process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL}/dashboard/my`}
                >
                  내 정보
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive hover:text-destructive/80"
                onClick={onLogoutButtonClick}
              >
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Button variant="secondary" onClick={onLoginButtonClick}>
          로그인
        </Button>
      )}
    </div>
  );
}
