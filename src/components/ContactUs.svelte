<script type="ts">
    import { Input, Label, Textarea, Button } from "flowbite-svelte";
</script>

<form
    action="https://submit-form.com/S4thNefhg"
    target="_blank"
    class="mx-auto max-w-[640px] m-4"
>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <Label for="name">Name</Label>
            <Input type="text" id="name" name="name" placeholder="" required />
        </div>
        <div>
            <Label for="email">Email</Label>
            <Input
                type="email"
                id="email"
                name="email"
                placeholder=""
                required
            />
        </div>
    </div>
    <div class="mb-6">
        <Label for="message">Message</Label>
        <Textarea
            id="message"
            name="message"
            placeholder=""
            rows="8"
            required
        />
    </div>
    <div class="w-full place-content-center flex">
        <Button type="submit">Send</Button>
    </div>
</form>
